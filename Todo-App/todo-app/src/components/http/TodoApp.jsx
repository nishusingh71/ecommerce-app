import React, { useEffect, useState } from "react";

export default function TodoApp() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const getTodos = () => {
    fetch("https://todoreactapp-870d3-default-rtdb.firebaseio.com/todo.json", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (typeof data ==='Object') {
          let d = [];
          for (const key in data) {
            d.push(data[key]);
          }
          setTodos([...d]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const submitForm = (event) => {
    event.preventDefault();
    fetch("https://todoreactapp-870d3-default-rtdb.firebaseio.com/todo.json", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "content-Type": "application/json",
      },
    })
      .then((response) => {
        setTodo("");
        setTodos([...todos, todo]);
        // getTodos();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteTodos = () => {
    fetch("https://todoreactapp-870d3-default-rtdb.firebaseio.com/todo.json", {
      method: "DELETE",
    })
      .then((response) => {
        setTodos([]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getTodos();
  }, [todos.length]);
  return (
    <div className="container mt-4">
      <form onSubmit={submitForm}>
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
              Add
            </button>
          </div>
        </div>
      </form>
      <div className="container mt-4 d-flex justify-content-end">
        <button className="btn btn-danger" onClick={deleteTodos}>
          Delete All
        </button>
      </div>
      <div className="mt-4">
        <ul className="list-group">
          {todos.length > 0 ? (
            todos.map((todo, index) => (
              <li
                className="list-group-item d-flex justify-content-between"
                key={index}
              >
                {todo}
                {/* <div>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteTodos(index)}
                  ></button>
                </div> */}
              </li>
            ))
          ) : (
            <li className="list-group-item">No Todos</li>
          )}
        </ul>
      </div>
    </div>
  );
}
