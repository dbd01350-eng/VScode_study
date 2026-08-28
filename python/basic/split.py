# split()
## 1. 공백으로 분할
a, b = input("문자 두개 써요:").split()
print("a:", a)
print("b:", b)

## 2. 쉼표로 분할
x, y = input().split(",")
print(f"x: {x}, y:{y}")  # fstring

## 3. 쉬는시간과 함께 공백분할(1분 남음)
## z:1분
## zz:남음

z,zz = input("쉬는시간 얼마남았어?:").split("❤")
print(f"z:{z} zz:{zz}")
