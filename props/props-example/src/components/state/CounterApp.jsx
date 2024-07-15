import React, { useState } from "react";

export default function CounterApp() {
  let [counter, setCounter] = useState(1000);
  let increment = () => {
    setCounter(counter + 1);
  };
  let decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <header className="header">CounterApp</header>
      <center>
        <div className="div">
      <button className="btnInc" onClick={increment}>+</button>
      <h1 className="ctext">{counter}</h1>
      <button className="btnDec" onClick={decrement}>-</button>
      </div>
      </center>
    </div>
  );
}
