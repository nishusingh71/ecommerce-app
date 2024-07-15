import React, { useMemo } from "react";
import useCounter from "./useCounter";
import Parent from "./Parent";
export default function CounterApp() {
  const [counter, increment, decrement] = useCounter(100);
  // useMemo
  const sum = () => {
    let s = 0;
    for (let num = 0; num < 10000; num++) {
      s += num;
    }
    console.log(s);
  };
  let t = useMemo(sum, []);
  return (
    <div>
      <p>Counter:{counter}</p>
      <p>Sum:{t}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <hr />
      <Parent />
    </div>
  );
}
