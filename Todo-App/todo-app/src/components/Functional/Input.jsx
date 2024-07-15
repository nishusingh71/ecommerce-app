import toast from "react-hot-toast";
import React, { useEffect } from "react";
import { useState } from "react";

export default function Input(props) {
  const [todo, setTodo] = useState("");
  const inputChange = (event) => {
    setTodo(event.target.value);
    if (!event.target.value) {
      toast.success("Please add todo");
    }
  };
  const submitForm = (event) => {
    event.preventDefault();
    if (todo) {
      if (props.todo.includes(todo)) {
        toast.error("todo already exists");
        return;
      }
      if (props.editData.index === -1) {
        props.addTodo(todo);
      } else {
        props.updateTodo(props.editData.index, todo);
      }

      setTodo("");
    } else {
      toast.success("Please add todo");
    }
  };
  useEffect(() => {
    setTodo(props.editData.data);
  }, [props.editData.data, props.editData.index]);
  return (
    <section>
      <form onSubmit={submitForm} noValidate>
        <div className="row">
          <div className="col-10">
            <input
              type="text"
              placeholder="Enter Your todos"
              className="form-control"
              value={todo}
              onChange={inputChange}
            />
          </div>
          <div className="col-2">
            <button className="btn btn-primary">
              {props.editData.index === -1 ? "Add" : "Update"}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
