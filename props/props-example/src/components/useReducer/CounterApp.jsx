import React, { useReducer } from "react";
import { countReducer } from "./Counter.reducer";
export default function CounterApp() {
  let [counter, dispatch] = useReducer(countReducer, 0);
  const increment = () => {
    dispatch({
      type: "increment",
      payload: 1,
    });
  };
  const decrement = () => {
    dispatch({
      type: "decrement",
      payload: 1,
    });
  };
  return (
    <div>
      <center>
        <p>counter:{counter}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </center>
    </div>
  );
}
