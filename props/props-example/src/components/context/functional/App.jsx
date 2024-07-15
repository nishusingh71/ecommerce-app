import React, { useContext } from "react";
import { store } from "./store";

export default function App() {
  let ctx = useContext(store);
  return (
    <div>
      <p>Counter:{ctx.counter}</p>
      <button onClick={ctx.increment}>Increment</button>
      <button onClick={ctx.decrement}>Decrement</button>
    </div>
  );
}
