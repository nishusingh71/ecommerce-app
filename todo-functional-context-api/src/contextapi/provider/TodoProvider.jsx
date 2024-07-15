import React, { useReducer } from "react";
import { store, intialState } from "../store/store";
import { todoInitialState, todoReducer } from "../reducer/todo.reducer";
import {
  addTodoAction,
  deleteTodoAction,
  editTodoAction,
  updateTodoAction,
} from "../action/todo.action";
export default function TodoProvider(props) {
  const [todoState, dispatch] = useReducer(todoReducer, todoInitialState);
  const addTodo = (value) => {
    dispatch(addTodoAction(value));
  };
  const deleteTodo = (value) => {
    dispatch(deleteTodoAction(value));
  };
  const editTodo = (index, data) => {
    dispatch(editTodoAction(index, data));
  };
  const updateTodo = (index, data) => {
    dispatch(updateTodoAction(index, data));
  };
  return (
    <store.Provider
      value={{
        ...intialState,
        todos: todoState.todos,
        addTodo,
        deleteTodo,
        editTodo,
        editData: todoState.editData,
        updateTodo,
      }}
    >
      {props.children}
    </store.Provider>
  );
}
