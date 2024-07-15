import React, { Component } from "react";
import Input from "./Input";
import List from "./List";
import toast, { Toaster } from "react-hot-toast";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: ["Breakfast", "Lunch", "Snacks", "Dinner"],
      editData: {
        index: -1,
        data: "",
      },
    };
  }
  addTodo = (value) => {
    this.setState({
      todos: [...this.state.todos, value],
    });
    toast.success("todo Add Successfully");
  };
  deleteTodo = (value) => {
    let filterTodos = this.state.todos.filter((todo) => todo !== value);
    this.setState({ todos: [...filterTodos] });
    toast.success("todo deleted Successfully");
  };
  editTodo = (index, data) => {
    this.setState({
      editData: {
        index,
        data,
      },
    });
    toast.success("todo Editing..");
  };
  updateTodo = (index, data) => {
    this.state.todos.splice(index, 1, data);
    this.setState({
      todos: [...this.state.todos],
      editData: {
        index: -1,
        data: "",
      },
    });
    toast.success("todo Updated Successfully");
  };
  render() {
    return (
      <div className="container mt-5">
        <Input
          todos={this.todos}
          addTodo={this.addTodo}
          editData={this.state.editData}
          updateTodo={this.updateTodo}
        />
        <List
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          editTodo={this.editTodo}
          editData={this.state.editData}
        />
        <Toaster />
      </div>
    );
  }
}
