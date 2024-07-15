import React, { useCallback, useState } from "react";
import Child from "./Child";
export default function Parent() {
  console.log("Parent Component");
  let [counter, setCounter] = useState(0);
  //useCallbacks
  const increment = useCallback(() => {
    setCounter((preValue) => preValue + 1);
  }, []);
  return (
    <div>
      <p>Counter:{counter}</p>
      <Child increment={increment}/>
    </div>
  );
}
