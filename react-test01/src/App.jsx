import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const increament = () => {
    setCount((c) => c + 1);
  };
  const decreament = () => {
    setCount((c) => c - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <>
      <h2>Counter</h2>
      <div>
        <button onClick={decreament}>-</button>
        <div>{count}</div>
        <button onClick={increament}>+</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}

export default App;
