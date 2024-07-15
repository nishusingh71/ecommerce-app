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
    setTodo(props.editData.data);
  }, [props.editData.index, props.editData.data]);
  return (
    <div>
      <form className="row" onSubmit={submit}>
        <div className="col-10">
          <input
            className="form-control col-10"
            type="text"
            placeholder="Enter todos here"
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
          />
        </div>
        <div className="col-2">
          <button className="btn btn-primary">
            {props.editData.index === -1 ? "Add" : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
}
