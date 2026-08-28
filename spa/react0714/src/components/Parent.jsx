import Child from "./Child";
const Parent = (thanks) => {
  return (
    <>
      <div>Parent</div>

      <Child asset={thanks.asset} />
    </>
  );
};
export default Parent;
