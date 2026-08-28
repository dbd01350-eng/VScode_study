console.log("1+1");
const a = "5분남았으";
console.log(a);
const b = "집에 가자";

export function Text() {
  console.log(`a야${a}`);
  return (
    <>
      <p>자식 p {a}</p>
      <p> {b}</p>
    </>
  );
}
