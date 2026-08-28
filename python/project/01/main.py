import requests

# 이미지 주소의 공통 경로
url = "https://qwerew.cafe24.com/images/"

# 브라우저처럼 보이게 하기 위한 헤더
headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}

for number in range(1, 11):
    image_url = f"{url}{number}.jpg"
    img = requests.get(image_url, headers=headers)

    if img.status_code == 200:
        with open(f"test{number}.jpg", "wb") as fp:
            fp.write(img.content)
        print(f"{number}.jpg 다운로드 완료")
    else:
        print(f"{number}.jpg 다운로드 실패: {img.status_code}")
