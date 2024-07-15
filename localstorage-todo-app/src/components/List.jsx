import React from "react";

export default function List(props) {
  return (
    <div className="mt-4">
      <ul className="list-group">
        {props.todo.length > 0 ? (
          props.todo.map((value, index) => (
            <li
              className="list-group-item d-flex justify-content-between"
              key={index}
            >
              {value}
              <div>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => props.editTodo(index, value)}
                  disabled={props.editData.index === -1 ? false : true}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => props.deleteTodo(value)}
                  disabled={props.editData.index === -1 ? false : true}
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <li className="list-group-item">No Todo</li>
        )}
      </ul>
    </div>
  );
}
