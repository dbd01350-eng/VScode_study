import Grandparent from "./components/Grandparent";
import Greeting from "./components/Greeting.jsx";
import { User, List } from "./components/Greeting.jsx";
const App = (props) => {
  return (
    <>
      <div className="container bg-gray-300 mb-5">
        <Greeting text="김철수" age={18} gender="남성" job="학생" />
        <Greeting text="김영희" age={18} gender="여성" job="주부" />
        <Greeting text="김땡땡" age={18} gender="중성" job="무직" />
        <Greeting text="조철수" age={18} gender="남성" job="회사원" />
      </div>
      <div className="container bg-red-100 mb-5">
        <User isAdmin={true} />
        <User isAdmin={false} />
        <User isAdmin />
      </div>
      <div className="container bg-blue-100">
        <List items={[1, 2, 3, 4, "할일"]} />
      </div>
    </>
  );
};
export default App;
