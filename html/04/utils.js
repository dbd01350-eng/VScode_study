//named export
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

export { multiply, divide };

//default export
//파일당 딱 한번만 내보낼수 있는 기본모듈
export default function greet(name) {
  return `안녕 ${name}`;
}
export function member(name) {
  return `안녕 ${name}`;
}
