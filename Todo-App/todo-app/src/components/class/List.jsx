import React, { Component } from "react";
export default class List extends Component {
  render() {
    return (
      <section className="mt-5">
        <ul className="list-group">
          {this.props.todos.length > 0 ? (
            this.props.todos.map((value, index) => (
              <li
                className="list-group-item d-flex justify-content-between "
                key={index}
              >
                {value}
                <div>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => this.props.editTodo(index, value)}
                    disabled={this.props.editData.index === -1 ? false : true}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.props.deleteTodo(value)}
                    disabled={this.props.editData.index === -1 ? false : true}
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
