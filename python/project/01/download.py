import requests
import json

url = "https://dapi.kakao.com/v2/search/image"

headers = {"Authorization": "KakaoAK 9bf6c77ae6e94444c59f2293f24ba14c"}

data = {"query": "차은우"}

# 이미지 검색 요청
response = requests.post(url, headers=headers, data=data)

# 통신 성공, 실패 실행문
if response.status_code != 200:
    print(response)  # 통신 실패
else:
    print(f"success:{response}")  # 통신 성공
    documents = response.json().get("documents", [])

    for idx, doc in enumerate(documents, start=1):
        img_url = doc["image_url"]
        img = requests.get(img_url)

        with open(f"test{idx}.jpg", "wb") as fp:
            fp.write(img.content)

        print(f"saved: test{idx}.jpg")
