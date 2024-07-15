import React, { Component } from "react";
import { store } from "./store";

export default class App extends Component {
  static contextType = store;
  render() {
    return (
      <div>
        <p>Counter:{this.context.counter}</p>
        <button onClick={this.context.increment}>Increment</button>
        <button onClick={this.context.decrement}>Decrement</button>
      </div>
    );
  }
}
