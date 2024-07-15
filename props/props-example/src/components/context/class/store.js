import { createContext } from "react";
export const initialstate = {
  counter: 10,
  increment: () => {},
  decrement: () => {},
};
export const store = createContext(initialstate);
