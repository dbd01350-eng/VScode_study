import Parent from "./Parent";
const data = "강남12층신축빌딩";
const Grandparent = (props) => {
  return (
    <>
      <div>Grandparent</div>
      <Parent asset={data}/>
    </>
  );
};
export default Grandparent;
