import { useEffect, useState } from "react";
import Input from "./components/Input";
import List from "./components/List";
const getLocalTodos = () => {
  const todos = localStorage.getItem("todos");
  if (todos) {
    return JSON.parse(localStorage.getItem("todos"));
  }
  return [];
};
function App() {
  const [todo, setTodo] = useState(getLocalTodos());
  const [editData, setEditData] = useState({
    index: -1,
    data: "",
  });
  const addTodo = (value) => {
    setTodo([...todo, value]);
  };
  const deleteTodo = (value) => {
    const filterTodo = todo.filter((todo) => todo !== value);
    setTodo(filterTodo);
  };
  const editTodo = (index, value) => {
    setEditData({
      index,
      value,
    });
  };
  const updateTodo = (index, value) => {
    todo.splice(index, 1, value);
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
    <div className=" container mx-xl  my-10">
      <Input
        todo={todo}
        addTodo={addTodo}
        updateTodo={updateTodo}
        editData={editData}
      />
      <List
        todo={todo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        editData={editData}
      />
    </div>
  );
}

export default App;
