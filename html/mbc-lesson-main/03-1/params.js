/* 두수를 더하는 함수 */

function addNum(num1, num2) {
  //sum은 지역 변수 이므로 addNum 함수 밖에서 안읽힘
  const sum = num1 + num2;
  //return은 sum의 값을 함수 밖으로 전달후 함수를 종료
  return sum;
  console.log("sum",sum);
}

document.write(`addNum함수 실행결과: ${addNum(1, 2)}`);
