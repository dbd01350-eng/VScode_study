# https://search.naver.com/search.naver?query=스파이더맨
import requests
from bs4 import BeautifulSoup
from html import escape
from pathlib import Path

keyword = "스파이더맨"
url = f"https://search.naver.com/search.naver?query={keyword}"

headers = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/120.0.0.0 Safari/537.36"
    )
}

response = requests.get(url, headers=headers)
# print(response)
response.encoding = "utf-8"
# print(response.text)
soup = BeautifulSoup(response.text, "lxml")
# print(soup)
desc = soup.select("span.desc")
img = soup.select("img._img")
scrollers = soup.select(".list._scroller")

items = []
for index in range(max(len(desc), len(img))):
    text = desc[index].get_text(strip=True) if index < len(desc) else ""
    image = img[index] if index < len(img) else None
    image_url = ""
    if image:
        image_url = image.get("data-lazysrc") or image.get("src") or ""

    items.append(f"""
        <article class="item">
            {f'<img src="{escape(image_url, quote=True)}" alt="">' if image_url else ''}
            <p>{escape(text)}</p>
        </article>
        """)

scroller_html = "".join(str(item) for item in scrollers)

page = f"""<!doctype html>
<html lang="ko">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{escape(keyword)} 검색 결과</title>
    <style>
        body {{ max-width: 900px; margin: 40px auto; padding: 0 20px; font-family: sans-serif; }}
        .item {{ display: flex; gap: 16px; padding: 16px 0; border-bottom: 1px solid #ddd; }}
        img {{ width: 160px; height: 110px; object-fit: cover; }}
        p {{ margin: 0; line-height: 1.6; }}
        .scroller {{ margin-top: 32px; padding: 20px; background: #f5f5f5; }}
    </style>
</head>
<body>
    <h1>{escape(keyword)} 검색 결과</h1>
    {''.join(items) or '<p>검색 결과가 없습니다.</p>'}
    <h2>추가 정보</h2>
    <section class="scroller">
        {scroller_html or '<p>추가 정보가 없습니다.</p>'}
    </section>
</body>
</html>
"""

output = Path(__file__).with_name("movie.html")
output.write_text(page, encoding="utf-8")
