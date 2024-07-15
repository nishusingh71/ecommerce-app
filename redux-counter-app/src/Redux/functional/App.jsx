import React from "react";
import { useDispatch, useSelector } from "react-redux";
export default function App() {
  let counter = useSelector((store) => store.counter);
  const dispatch = useDispatch();
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
        <p>counter : {counter}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>decrement</button>
      </center>
    </div>
  );
}
