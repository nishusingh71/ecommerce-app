import React, {  useState } from "react";
import { store, initialstate } from "./store";

export default function CounterProvider(props) {
  let [counter, setCounter] = useState(10);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <store.Provider value={{ ...initialstate, counter, increment, decrement }}>
      {props.children}
    </store.Provider>
  );
}
