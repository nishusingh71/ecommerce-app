import React, { useEffect, useState } from "react";

export default function App(props) {
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(0);
  console.log("App Component Loaded");
  const increment = () => {
    setCounter1(counter1 + 1);
  };
  //ComponentWillUpdate
  useEffect(() => {
    console.log("Use Effect");
    console.log(counter);
  });
  //ComponentDidMount
  useEffect(() => {
    console.log("Use Effect");
    console.log(counter);
  }, []);
  //ComponentDidUpdate with dependencies
  useEffect(() => {
    console.log("Use Effect");
    console.log(counter);
    setCounter(counter + 1);
  }, [counter1]);
  return (
    <div>
      {console.log("Return")}
      <p>counter:{counter}</p>
      <p>counter1:{counter1}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
