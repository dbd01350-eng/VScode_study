const name = "철수";
const age = 20;

// 기존 방식
const msg1 = "이름: " + name + ", 나이: " + age;

// 템플릿 리터럴
const msg2 = `이름: ${name}, 나이: ${age}`;

// 표현식 사용
const msg3 = `내년 나이: ${age + 1}세`;

// 여러 줄 문자열
const html = `
  <div>
    <h1>${name}</h1>
    <p>${age}세</p>
  </div>
`;

console.log(msg2); // 이름: 철수, 나이: 20
