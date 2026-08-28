//객체구조분해
const user = {
  name: "철수",
  age: 20,
  job: "개발자",
};
//기존방식
const name1 = user.name;
console.log(name1);
const age1 = user.age;
console.log(age1);

//구조분해할당 Destructuring
const { name, age } = user;
console.log(name, age);

//배열구조분해
const arr = [1, 2, 3, 4, 5];
const a1 = arr[0];
const a2 = arr[0 + 1];
console.log(a1, a2);
const [n, m] = arr;
console.log(n, m);

/* -------------------- */
/* -----Spread Operator-------- */
/* -------------------- */
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
//배열합체
const arr3 = [...arr1, ...arr2];
console.log(arr3);
//요소, 원소 추가
const arr4 = ["자바스크립트복습", ...arr3, "화장실"];
console.log(arr4);

// ========== 객체 스프레드 ==========
const use = { name: "철수", age: 20 };
//객체복사
const userCopy = { ...use };
//속성추가
const user2 = { ...userCopy, job: "백수희망자" };
console.log(user2);
//속성덮어쓰기
const user3 = { ...userCopy, job: "마케터" };
console.log(user3);

// 여러 객체 합치기 선언 순서대로 병합됨
const a = { x: 1, y: 2 };
const b = { y: 3, z: 4 };
const c = { ...a, ...b };       // y는 b의 값으로 덮어써짐
console.log(c);                 // { x: 1, y: 3, z: 4 }
