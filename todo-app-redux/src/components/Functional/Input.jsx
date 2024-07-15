import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction, updateTodoAction } from "./redux/actions/todo.action";

export default function Input() {
  let dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const editData = useSelector((state) => state.editData);
  const submit = (event) => {
    event.preventDefault();
    if (editData.index !== -1) {
      dispatch(updateTodoAction(editData.index, todo));
    } else {
      dispatch(addTodoAction(todo));
    }
    setTodo("");
  };

  useEffect(() => {
    if (editData.index !== -1) {
      setTodo(editData.data);
    }
  }, [editData.index, editData.data]);
  return (
    <form>
      <div className="row">
        <div className="col-10">
          <input
            type="text"
            className="form-control"
            placeholder="Enter todo"
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
          />
        </div>
        <div className="col-2">
          <button
            className="btn btn-primary "
            type="button"
            onClick={submit}
            disabled={!todo}
          >
            {editData.index > -1 ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </form>
  );
}
