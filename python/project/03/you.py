from pathlib import Path
import re
from urllib.parse import parse_qs, urlparse

from flask import Flask, jsonify, render_template_string, request
from flask_cors import CORS


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

DOWNLOAD_DIR = Path(__file__).resolve().parent / "downloads"
WINDOWS_RESERVED_NAMES = {
    "CON",
    "PRN",
    "AUX",
    "NUL",
    *(f"COM{number}" for number in range(1, 10)),
    *(f"LPT{number}" for number in range(1, 10)),
}


def sanitize_filename(filename):
    """Remove Windows-forbidden characters and normalize whitespace."""
    filename = re.sub(r'[<>:"/\\|?*]', "", filename)
    filename = re.sub(r"\s+", " ", filename).strip()
    filename = filename.rstrip(".")

    if not filename:
        return ""

    stem = filename.split(".", 1)[0].upper()
    if stem in WINDOWS_RESERVED_NAMES:
        filename = f"_{filename}"

    return filename[:100].rstrip(".")


def is_youtube_url(url):
    """Allow common YouTube watch, short, embed, and Shorts URLs only."""
    try:
        parsed = urlparse(url)
    except ValueError:
        return False

    hostname = (parsed.hostname or "").lower().rstrip(".")
    if hostname in {"youtube.com", "www.youtube.com", "m.youtube.com"}:
        if parsed.path == "/watch":
            return bool(parse_qs(parsed.query).get("v", [""])[0])
        return parsed.path.startswith(("/shorts/", "/embed/"))

    return hostname in {"youtu.be", "www.youtu.be"} and bool(parsed.path.strip("/"))


@app.get("/")
def index():
    return render_template_string(
        """
        <!doctype html>
        <html lang="ko">
        <head><meta charset="utf-8"><title>YouTube 다운로드</title></head>
        <body>
            <h1>YouTube 영상 다운로드</h1>
            <form method="post" action="/save">
                <label>영상 주소
                    <input name="url" type="url" required
                           placeholder="https://www.youtube.com/watch?v=..."><br>
                </label>
                <label>파일 이름
                    <input name="filename" type="text" value="youtube_video"><br>
                </label>
                <button type="submit">다운로드</button>
            </form>
        </body>
        </html>
        """
    )


@app.route("/save", methods=["POST", "OPTIONS"])
def save_url():
    if request.method == "OPTIONS":
        return ("", 204)

    data = request.get_json(silent=True)
    if data is None:
        data = request.form.to_dict()
    if not isinstance(data, dict):
        return jsonify({"error": "JSON 본문이 필요합니다."}), 400

    url = data.get("url")
    filename = data.get("filename") or "youtube_video"
    if not isinstance(url, str) or not is_youtube_url(url):
        return jsonify({"error": "유효한 YouTube URL이 필요합니다."}), 400
    if not isinstance(filename, str):
        return jsonify({"error": "filename은 문자열이어야 합니다."}), 400

    safe_filename = sanitize_filename(filename)
    if not safe_filename:
        return jsonify({"error": "사용할 수 있는 파일명이 없습니다."}), 400

    try:
        import yt_dlp
    except ImportError:
        return jsonify({"error": "yt-dlp가 설치되어 있지 않습니다."}), 503

    DOWNLOAD_DIR.mkdir(parents=True, exist_ok=True)
    output_template = str(DOWNLOAD_DIR / f"{safe_filename}.%(ext)s")

    try:
        options = {
            "format": "bestvideo+bestaudio/best",
            "noplaylist": True,
            "outtmpl": output_template,
            "quiet": True,
            "no_warnings": True,
            "merge_output_format": "mp4",
        }
        with yt_dlp.YoutubeDL(options) as downloader:
            downloader.download([url])
    except yt_dlp.utils.DownloadError:
        app.logger.exception("YouTube download failed")
        return jsonify({"error": "영상 다운로드에 실패했습니다."}), 502
    except Exception:
        app.logger.exception("Unexpected download error")
        return jsonify({"error": "영상 저장 중 오류가 발생했습니다."}), 500

    return jsonify({"message": "영상이 저장되었습니다.", "filename": safe_filename}), 201


if __name__ == "__main__":
    app.run(debug=False)
