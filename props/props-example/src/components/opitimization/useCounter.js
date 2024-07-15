import { useState } from "react";

export default function useCounter(value) {
  const [counter, setCounter] = useState(value ?? 0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return [counter, increment, decrement];
}
