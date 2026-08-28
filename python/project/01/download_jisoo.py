import os
import re
import requests

# 특정 티스토리 페이지 URL
page_url = "https://luvyvella.tistory.com/entry/블랙핑크-지수-프로필-사진-고화질"
# 위 URL은 예시입니다. 실제로는 해당 글 주소를 넣으면 됩니다.

headers = {"User-Agent": "Mozilla/5.0"}

folder = "tistory_images"
os.makedirs(folder, exist_ok=True)

response = requests.get(page_url, headers=headers, timeout=30)
response.raise_for_status()
html = response.text

# HTML 안에서 이미지 URL 추출
image_urls = re.findall(
    r'https?://[^\s"\'<>]+(?:\.jpg|\.jpeg|\.png|\.gif|\.webp)(?:\?[^\s"\'<>]*)?',
    html,
    re.IGNORECASE,
)

# 중복 제거
seen = set()
unique_images = []
for img_url in image_urls:
    clean_url = img_url.replace("&amp;", "&")
    if clean_url not in seen:
        seen.add(clean_url)
        unique_images.append(clean_url)

print(f"이미지 수: {len(unique_images)}")

for idx, img_url in enumerate(unique_images, start=1):
    img_response = requests.get(img_url, headers=headers, timeout=30)
    if img_response.status_code != 200:
        continue

    file_name = f"지수_{idx}.jpg"
    save_path = os.path.join(folder, file_name)

    with open(save_path, "wb") as fp:
        fp.write(img_response.content)

    print(f"saved: {save_path}")
