import Props from "./Props.jsx";
const members = ["기원", "진우", "은솔"];
const colors=['red','orange','yellow','green']
const App = () => {
  return (
    <>
      <div>App</div>
      <hr />
      <Props color={colors[0]}>{members[0]}</Props>
      <Props color={colors[1]}>{members[1]}</Props>
      <Props color={colors[2]}>{members[2]}</Props>
      <Props color={colors[3]}>{members[3]}</Props>
      <Props member="회원" color="red">
        두번째 props
      </Props>
    </>
  );
};
export default App;
