import "./Todo.css";
import { useState } from "react";
const Todo = (props) => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  return (
    <div className="container">
      <div className="input-box">
        <input type="text" className="input-field" placeholder="할일을 입력하세요" value={input} onChange={(e) => setInput(e.target.value)} />
        <button className="add-btn" onClick={() => setTodo([...todo, input])}>
          추가
        </button>
      </div>
      <ul className="list-box">
        {todo.map((e, i) => (
          <li key={i} className="list-item">
            {e}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Todo;
