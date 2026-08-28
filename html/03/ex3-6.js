let currentYear = 2026;
let birthYear;
console.log(currentYear);
console.log(`birthYear : ${birthYear}`);
let age;
birthYear=prompt('출생연도를 입력하세요.[YYYY]','')
document.write(`당신은 ${birthYear}년도에 태어났어 맞지?<br>`);
document.write(`당신은 올해 ${currentYear - birthYear}살이구만 맞지?<br>`);
age=currentYear - birthYear
document.write(`당신은 올해 ${age}살이구만 맞지?<br>`);