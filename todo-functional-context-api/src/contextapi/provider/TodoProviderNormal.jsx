import React, { useState } from "react";
import { store, intialState } from "../store/store";
export default function TodoProvider(props) {
  const [todos, setTodos] = useState(["breakfast", "lunch", "dinner"]);
  const [editData, setEditData] = useState({
    index: -1,
    data: "",
  });
  const addTodo = (value) => {
    setTodos([...todos, value]);
  };
  const deleteTodo = (value) => {
    let filterTodo = todos.filter((todo) => todo !== value);
    setTodos([...filterTodo]);
  };
  const editTodo = (index, data) => {
    setEditData({
      index,
      data,
    });
  };
  const updateTodo = (index, data) => {
    todos.splice(index, 1, data);
    setTodos([...todos]);
    setEditData({
      index: -1,
      data: "",
    });
  };
  return (
    <store.Provider
      value={{
        ...intialState,
        todos,
        addTodo,
        deleteTodo,
        editTodo,
        editData,
        updateTodo,
      }}
    >
      {props.children}
    </store.Provider>
  );
}
