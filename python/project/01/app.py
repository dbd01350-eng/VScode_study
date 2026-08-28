# 파일쓰기
data = "가나다라"
with open("test.txt", "w") as fp:
    fp.write(data)

# 파일읽기
with open("test.txt"."r") as fp:
    print("==========result==========")
    print(fp.read())