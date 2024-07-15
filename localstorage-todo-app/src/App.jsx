import { useEffect, useState } from "react";
import Input from "./components/Input";
import List from "./components/List";
const getLocalTodos = () => {
  let todos = localStorage.getItem("todos");
  if (todos) {
    return JSON.parse(localStorage.getItem("todos"));
  } else {
    return [];
  }
};

export default function App() {
  const [todo, setTodo] = useState(getLocalTodos());
  const [editData, setEditData] = useState({
    index: -1,
    data: "",
  });
  const addTodo = (value) => {
    setTodo([...todo, value]);
  };

  const deleteTodos = (value) => {
    let filterTodos = todo.filter((todo) => todo !== value);
    setTodo(filterTodos);
  };
  const editTodo = (index, data) => {
    setEditData({ index, data });
  };
  const updateTodo = (index, data) => {
    todo.splice(index, 1, data);
    setTodo([...todo]);
    setEditData({
      index: -1,
      data: "",
    });
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);
  return (
    <div className="container mt-4">
      <Input
        todo={todo}
        editData={editData}
        updateTodo={updateTodo}
        addTodo={addTodo}
      />
      <List
        todo={todo}
        editData={editData}
        editTodo={editTodo}
        deleteTodos={deleteTodos}
      />
    </div>
  );
}
