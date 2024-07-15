import React,  {Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 100
    };
  }

  increment = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  };

  decrement = () => {
    this.setState(prevState => ({
      counter: prevState.counter - 1
    }));
  };
  render() {
    
    return (
      <div>
        <button className="btnInc" onClick={this.increment}>
          +
        </button>
        <h1 className="ctext">{this.state.counter}</h1>
        <button className="btnDec" onClick={this.decrement}>
          -
        </button>
      </div>
    );
  }
}
