import React, { Component } from "react";
import { store, intialState } from "../store/store";

class TodoProvider extends Component {
  constructor() {
    super();
    this.state = {
      todos: ["breakfast", "lunch", "dinner","Snacks"],
      editData: {
        index: -1,
        data: "",
      },
    };
  }

  addTodo = (value) => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, value],
    }));
  };

  deleteTodo = (value) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo !== value),
    }));
  };

  editTodo = (index, data) => {
    this.setState({
      editData: {
        index,
        data,
      },
    });
  };

  updateTodo = (index, data) => {
    this.setState((prevState) => {
      const newTodos = [...prevState.todos];
      newTodos.splice(index, 1, data);
      return {
        todos: newTodos,
        editData: {
          index: -1,
          data: "",
        },
      };
    });
  };

  render() {
    return (
      <store.Provider
        value={{
          ...intialState,
          todos: this.state.todos,
          addTodo: this.addTodo,
          deleteTodo: this.deleteTodo,
          editTodo: this.editTodo,
          editData: this.state.editData,
          updateTodo: this.updateTodo,
        }}
      >
        {this.props.children}
      </store.Provider>
    );
  }
}

export default TodoProvider;
