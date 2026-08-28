# 변수 하나만 선언
x = 10  # 변수명 x , 값 10
print(x)  # 10
# y 변수를 선언하고 20을 할당하세요
y = 20
# x+y 의 값을 출력하세요
print(x + y)

# 여러개 선언
a, b, c = 10, 20, 30
print(a)
print(b)
print(c)
print(a + b + c)
# 자료형 검사 a
print(type(a))

d = e = f = 100
# d , e , f = 100 # 변수 여러개 선언시 좌항,우항의 인자갯수가 같아야함
print("d", d)  # d100 "글자"+숫자X
print("e", e)  # e100 "글자"+숫자X
print("f", f)  # f100 "글자"+숫자X


g, h = 10, 20  # g=10, h=20
g, h = h, g
print("g", g)
print("h", h)
# 3.14
# 2.
# 1.
# uv
# 빈 변수 선언
i = None
print(i)

print(x)
print("-------------------")
# 변수 삭제
x = 300
print(x)
del x
# print(x)
a = 10
b = 20
c = a + b  # 30
print(c)
# 누산 [복합대입연산자]
a = 10
a += 20  # a=a+20
print("a", a)
