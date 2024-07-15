import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Input from "./Input";
import List from "./List";

function App() {
  let [todo, setTodo] = useState(["BreakFast", "Lunch", "Snacks", "Dinner"]);
  let [editData, setEditData] = useState({
    index: -1,
    data: "",
  });
  const addTodo = (value) => {
    setTodo([...todo, value]);
    toast.success("todo added successfully");
  };

  const deleteTodo = (value) => {
    let filterTodo = todo.filter((todo) => todo !== value);
    setTodo(filterTodo);
    toast.success("todo deleted successfully");
  };
  const editTodo = (index, data) => {
    setEditData({
      index,
      data,
    });
    toast.success("todo editing..");
  };
  const updateTodo = (index, data) => {
    todo.splice(index, 1, data);
    setTodo([...todo]);
    setEditData({
      index: -1,
      data: "",
    });
    toast.success("todo updated successfully");
  };
  return (
    <div className="container mt-5">
      <Input
        addTodo={addTodo}
        todo={todo}
        editData={editData}
        updateTodo={updateTodo}
      />
      <List
        todo={todo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        editData={editData}
      />
      <Toaster />
    </div>
  );
}

export default App;
