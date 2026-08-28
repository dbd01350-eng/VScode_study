console.log(1 + 1);
console.log("자바스크립트를 넣는법");
document.write(`<h1 class="btn">click</h1>`);
document.querySelector(".btn").onclick = function () {
  document.querySelector(".text").style.color = "blue";
  document.querySelector("body").style.background = "yellow";
};
// 값을 만들어내는 코드조각 =>표현식

