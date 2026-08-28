function multiple(a, b = 1, c = 0) {
  return a * b + c;
}
const result = multiple(5, 10, 20);
document.write(`multiple(5, 10, 20):${result}`);
document.write(`<hr>`);

// 매개변수 2개 쓰기 (a,b 를 넣고 c에 기본값 넣기)
const result1 = multiple(5, 10);
document.write(`multiple(5, 10):${result1}`);
document.write(`<hr>`);

// 매개변수 1개 쓰기 (a 를 넣고 b,c에 기본값 넣기)
const result2 = multiple(5);
document.write(`multiple(5):${result2}`);
document.write(`<hr>`);
