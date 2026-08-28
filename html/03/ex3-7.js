// 한줄주석  ctrl + /
/* alt+shift+a */

/* Primitive type [원시형] */

// number
let num1 = 1;
console.log("num1", num1, typeof num1); /* 변수명, 데이터, 데이터타입 */
let num2 = 2;
console.log(typeof num2);
let sum = num1 + num2;
console.log(sum);

// string
let str = "'안'녕";
let str2 = '"하세요"';
console.log(typeof str, typeof str2);
console.log(str + str2);
console.log(str - str2); /* 숫자아님 NaN*/

// boolean
let isTrue = true;
console.log(isTrue);
let isFalse = false;
console.log(typeof isFalse);

/* 참조형 reference type */

// object 객체 -> 이름:데이터 숫자:데이터 등등 여러개를 한번에 다룰 수 있음
//  {} 객체 리터럴
let obj = {
  name: "mango",
  age: 5,
  log: function () {
    console.log("🧡💛💚💙💜🤎🖤");
  },
};
console.log(typeof obj);
console.log(obj.name);
obj.log();

// array     object>array
let arr = [
  "mango",
  5,
  function (emo) {
    console.log(emo);
  },
];
console.log(typeof arr);
console.log(arr);
console.log(arr[1 + 1]);
console.log(arr[2]);
console.log(arr[1]);
console.log(arr[0]);
arr[1 + 1]();
arr[2]("🥰😀");
arr[2]("🤑");

// funtion
let fn = function () {
  console.log("끝");
};
console.log(typeof fn);
fn();


/* 특수유형 */
let temp = null;
// 템플릿 리터럴 : `${}` 텍스트와 변수를 간단히 연결
console.log(`temp 자료형:${typeof temp}/// temp의 데이터:${temp}`);

let x; //undefined 선언은 되었으나 값이 할당되지 않음.
console.log(`x의 자료형:${typeof x}/// x의 데이터: ${x}`);
