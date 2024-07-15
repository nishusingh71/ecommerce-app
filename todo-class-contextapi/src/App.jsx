import React, { Component } from "react";
import Input from "./compontents/Input";
import List from "./compontents/List";
export default class App extends Component {
  render() {
    return (
      <div className="container mt-4">
        {/* <h1>Todo App in ClassComponents</h1> */}
        <Input />
        <List />
      </div>
    );
  }
}
