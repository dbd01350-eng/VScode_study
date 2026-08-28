// function greet(name) {
//   return `안녕하세요! ${name}님`
// }
// console.log(greet("몽이"))
// console.log(greet("기원"))

const Props = (props) => {
  return (
    <>
      {console.log("자식컴포넌트", props)}
      <div style={{ color: props.color }}>안녕하세요~ {props.children}</div>
      <div style={{ color: props.color }}>{props.member}반갑습니다.</div>
    </>
  );
};
export default Props;
