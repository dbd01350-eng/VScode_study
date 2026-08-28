// HOOK
import { useState } from "react";

const App1 = (props) => {
  const [num, setNum] = useState(0); //[undefined,f]
  return (
    <>
      <div className="text-2xl mb-4">클릭횟수: {num}</div>
      <button onClick={() => setNum(num + 1)} className="bg-amber-400 p-4 block rounded-2xl">
        +
      </button>
    </>
  );
};
export default App1;
