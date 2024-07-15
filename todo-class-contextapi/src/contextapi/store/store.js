import { createContext } from "react";
export const intialState = {
  todos: [],
  editData: {
    index: -1,
    data: "",
  },
  addTodo: () => {},
  deleteTodo: () => {},
  editTodo: () => {},
  updateTodo: () => {},
};
export const store = createContext(intialState);
