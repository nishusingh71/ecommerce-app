import React, { Component } from "react";
//Mounting
export default class Cycle extends Component {
  //1st call Constructors
  constructor() {
    super();
    console.log("Constructor Called...");
    // 2 State and Props get
    this.state = {
      counter: 0,
    };
    console.log(this.state.counter);
  }
  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  //4
  componentDidMount() {
    console.log("Component Did Mount Called");
    this.setState({ counter: 30 });
    //when properly Component loaded in UI// //willUnmount
  }
  componentWillUnmount() {
    console.log("Component Unmount Called");
  }
  //3
  render() {
    return (
      <div>
        {console.log("render method called")}
        <p>LifeCycle Of Component</p>
        <p>Counter:{this.state.counter}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
