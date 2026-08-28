gsap.registerPlugin(Observer);
const secs = gsap.utils.toArray(".sec");
const nav = document.querySelector(".nav");
let cur = 0,
  ani = false,
  du = 0.6;
//nav하위 버튼추가
const dots = secs.map((el, idx) => {
  const btn = document.createElement("button");
  btn.addEventListener("click", function () {
    move(idx);
  });
  nav.appendChild(btn);
  return btn;
});
function setActive() {
  dots.forEach((o, i) => {
    o.classList.toggle("on", i === cur);
  });
}

//첫번째만 표시
//1. 전부 off
gsap.set(secs, { autoAlpha: 0 });
//2. 일부 on
gsap.set(secs[0], { autoAlpha: 1 });

Observer.create({
  type: "wheel,touch",
  onDown: () => move(cur + 1),
  onUp: () => move(cur - 1),
  preventDefault: false,
  tolerance: 10,
});

function move(num) {
  console.log(num);
  if (ani == true || num < 0 || num >= secs.length) return;
  const next = num > cur ? 1 : -1;

  ani = true;
  gsap.to(secs[cur], { autoAlpha: 0, duration: du });
  gsap.fromTo(
    secs[num],
    { autoAlpha: 0, yPercent: 15 * next },
    {
      autoAlpha: 1,
      yPercent: 0,
      duration: du,
      onComplete: () => {
        ani = false;
        console.log("애니끝");
      },
    },
  );
  cur = num;
  setActive();
}
