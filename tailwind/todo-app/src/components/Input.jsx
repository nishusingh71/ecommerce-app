import React, { useEffect, useState } from "react";

export default function Input(props) {
  const [todo, setTodo] = useState("");
  const submit = (event) => {
    event.preventDefault();
    if (todo) {
      if (props.editData.index === -1) {
        props.addTodo(todo);
      } else {
        props.updateTodo(props.editData.index, todo);
      }
      setTodo("");
    }
  };
  useEffect(() => {
    setTodo(props.editData.value);
  }, [props.editData.index, props.editData.value]);
  return (
    <form className="w-full max-w-full " onSubmit={submit}>
      <div className="flex items-center ml-5 mr-10">
        <input
          className="appearance-none bg-transparent border-1 w-full text-white text-white-700 mr-3 py-2 px-4 leading-tight focus:outline-none"
          type="text"
          placeholder="Enter Your todos here"
          aria-label="Full name"
          value={todo || ""}
          onChange={(event) => setTodo(event.target.value)}
        />
        <button className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1.5 px-4 rounded">
          {props.editData.index === -1 ? "ADD" : "UPDATE"}
        </button>
      </div>
    </form>
  );
}
