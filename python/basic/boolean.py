# 파이썬은 data type이 dynamic data type(동적 자료형)으로 결정됨
# true, false
a = 1
print(type(a))  # int
a = 3 > 1  # True
print(type(a))
a = "a"
print(type(a))
print(type(True))
boo = False
foo = True
print(boo == foo)  # (False) False == True
print(boo != foo)  # (True) False != True

aa = "A"
print(a == aa)  # (False) False == True
print(a != aa)  # (True) False != True

print(10 > 10)  # False
print(10 < 5)  # False
print(10 >= 10)  # True
print(10 <= 10)  # True
print("----------------------------")

# 비교 is
print(1 == 1.0)  # True (값만 비교)
print(1 is 1.0)  # False (값의 종류까지 비교=> 정수와 실수 비교)
print(1 is not 1.0)  # True (정수와 실수 비교)


print("==================================")
# 논리연산자 and, or
## A and B 모두 True=>True
print("--------and----------")
print(True and True)  # A and B 모두 True => True
print(False and True)  # False
print(True and False)  # False
print(False and False)  # False
print("--------or----------")
## A or B 중 하나만 True => True
print(True or True)  # A and B 모두 True => True
print(False or True)  # True
print(True or False)  # True
print(False or False)  # False
print("--------not----------")
## A 나 B 의 값을 반대로
print(not True)  # True
print(not False)  # True
## 다양한 표현방법
print(not True and False or not False) # F -> F -> T
print("================================================")
print(10 == 10 and 10 != 5) # t   t-> t
print(10 > 5 or 10< 3) # t f -> t