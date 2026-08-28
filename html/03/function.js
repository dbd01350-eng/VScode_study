//1. 명명함수: 호이스팅 발생 (끌어올림)
명명함수();
function 명명함수(params) {
  console.log("이름있는 함수");
}
//2. 익명함수
//2-1. 표현식함수
const 표현식함수 = function (m1, m2) {
  document.write(`오늘 점심은 ${m1}과 ${m2}이야`);
};
표현식함수("쌀국수", "쏨땀");

//2-2. 즉시실행함수
(function (a, b) {
  document.write(`<h1>즉시실행함수????</h1><hr>${a + b}<br><br>`);
})(1, 2);

//2-3. 화살표함수 = function ()
const 화살표함수 = () => {  //1단변신
  document.write(`화살표함수 <br>`);
};
화살표함수();

const sum = (a, b) => {
  console.log(a + b);
  return;
};

sum(50, 10);
