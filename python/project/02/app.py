from bs4 import BeautifulSoup  # BeautifulSoup 을 변수 bs4 변수에 담음

html_doc = """ <html><head><title>MangoTitle</title></head>
<body>
<p class="title">Mango</p>

<p class="story">Once upon a time there were three little sisters;
and their names were
 <a href="http://example.com/elsie" class="sister" id="link1">Elsie</a>,
 <a href="http://example.com/lacie" class="sister" id="link2">Lacie</a>
 and <a href="http://example.com/tillie" class="sister" id="link3">Tillie</a>;
 and they lived at the bottom of a well.</p>
 <p class="story">...</p> """

soup = BeautifulSoup(html_doc, "lxml")
print(f"태그: {soup.body.p}") # 태그 불러올 때 
print(f"속성: {soup.body.a['href']}") # 속성 불러올 때
print(f"문자열: {soup.title.name}")  # 태그를 문자열 불러올때
print(f"텍스트 콘텐츠: {soup.title.string}")  # 텍스트 콘텐츠
print(f"html문서통채로: {soup.contents}")  # html 전부
print("-------------------------------------")
print(f"find:{soup.find('a',attrs={"class":"sister"})}")
print(f"find_all:{soup.find_all('a',limit=2)}")