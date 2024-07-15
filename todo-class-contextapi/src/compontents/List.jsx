import React, { Component } from "react";
import { store } from "../contextapi/store/store";

class List extends Component {
  static contextType = store;

  render() {
    const { todos, deleteTodo, editData, editTodo } = this.context;

    return (
      <section className="mt-5">
        <ul className="list-group">
          {todos.length > 0 ? (
            todos.map((todo, index) => (
              <li
                className="list-group-item d-flex justify-content-between"
                key={index}
              >
                {todo}
                <div>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => editTodo(index, todo)}
                    disabled={editData.index > -1}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteTodo(todo)}
                    disabled={editData.index > -1}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))
          ) : (
            <li className="list-group-item">No Todos</li>
          )}
        </ul>
      </section>
    );
  }
}

export default List;
