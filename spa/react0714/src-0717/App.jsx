import Child from "./Child";
import Member from "./Memper.jsx";
import Picture from "./Picture.jsx";
import "./Style.css";

function Name() {
  return <h1>App 안에서 태어난 컴포넌트</h1>;
}

function App() {
  // 컴포넌트의 조건: 함수명이 대문자로 시작, return 값 있어야 하고 태그를 꼭 넣어야함.

  /*   function Name() {
    return <h1>App 안에서 태어난 컴포넌트</h1>
  }  -> 여기서 추가 못함
 */

  return (
    <div>
      <Name></Name>
      <h1>안녕하세요</h1>
      <Child></Child>
      <Child />
      <Member></Member>
      <Picture></Picture>
    </div>
  );
}
export default App;
