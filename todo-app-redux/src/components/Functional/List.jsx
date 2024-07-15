import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodoAction, editTodoAction } from "./redux/actions/todo.action";
export default function List() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const editData = useSelector((state) => state.editData);
  return (
    <div className="container my-5">
      <ul className="list-group">
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <li
              className="list-group-item d-flex justify-content-between "
              key={index}
            >
              {todo}
              <div>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => dispatch(editTodoAction(index, todo))}
                  disabled={editData.index > -1 ? true : false}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm "
                  onClick={() => dispatch(deleteTodoAction(todo))}
                  disabled={editData.index > -1 ? true : false}
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <li className="list-group-item">No todo</li>
        )}
      </ul>
    </div>
  );
}
