import { useEffect, useState } from "react";
const Effect = (props) => {
  // useEffect() 컴포넌트 내에서 특정 함수의 호출시점을 제어함
  // 1. useEffect(함수)  컴포넌트 렌더링 될때 마다 함수 실행
  //2. useEffect(함수,[]) 컴포넌트 마운트시 한번 실행
  //3. useEffect(함수,[변수]) 특정 값 변경시 실행
  const [num, setNum] = useState(0);
  const [text, setText] = useState("임시");
  useEffect(() => console.log("입력값변경"), [num]);
  return (
    <>
      <input className="bg-blue-300" value={text} onChange={(e) => setText(e.target.value)} />
      <div className="text-4xl">{num}</div>
      <button onClick={() => setNum(num + 1)} className="text-4xl bg-red-500 text-amber-100 ">
        click
      </button>
    </>
  );
};
export default Effect;
