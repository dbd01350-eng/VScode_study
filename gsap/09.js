gsap.registerPlugin(ScrollTrigger);

//es6 표준 버전에 맞춰
const nums = document.querySelectorAll(".num");
nums.forEach((a, b) => (a.textContent = `섹션${b + 1}`));
// es5 X
// var n = document.getElementsByClassName("num");
// console.log(n);

//gsap에서 여러개 요소를 선택하는 문
let section = gsap.utils.toArray("section");
console.log(section);
//섹션 한개 고정
function sc1() {
  ScrollTrigger.create({
    trigger: section[1],
    start: "top top",
    end: "bottom 0%",
    pin: true,
    markers: true,
  });
}
//여러개 고정
function sc2() {
  section.forEach((panel) => {
    ScrollTrigger.create({
      trigger: panel,
      start: "top top",
      pin: true,
    });
  });
}
//카드스택
section.forEach((sec, idx) => {
  ScrollTrigger.create({
    trigger: sec,
    start: "top top",
    endTrigger: ".cont",
    end: "bottom bottom",
    pin: true,
    pinSpacing: false,
  });
});
