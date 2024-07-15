import React, { useContext, useEffect, useState } from "react";
import { store } from "../contextapi/store/store";

export default function Input() {
  const { addTodo, editData, updateTodo } = useContext(store);
  const [todo, setTodo] = useState("");
  const submit = (event) => {
    event.preventDefault();
    if (editData.index === -1) {
      addTodo(todo);
    } else {
      updateTodo(editData.index,todo);
    }

    setTodo("");
  };
  useEffect(() => {
    setTodo(editData.data);
  }, [editData.index, editData.data]);
  return (
    <section>
      <form onSubmit={submit} noValidate>
        <div className="row">
          <div className="col-10">
            <input
              type="text"
              placeholder="Enter Your todos"
              className="form-control"
              value={todo}
              onChange={(event) => setTodo(event.target.value)}
            />
          </div>
          <div className="col-2">
            <button className="btn btn-primary" disabled={todo ? false : true}>
              
              {editData.index === -1 ? "Add" : "Update"}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
