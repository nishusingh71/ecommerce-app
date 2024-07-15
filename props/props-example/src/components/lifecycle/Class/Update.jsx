import React, { Component } from "react";
//Updating
export default class Update extends Component {
  //1 call Constructors
  constructor() {
    super();
    // 2 State and Props get
    this.state = {
      counter: 0,
    };
  }
  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
    this.forceUpdate();
  };
  //3
  shouldComponentUpdate(nextProps, nextState) {
    console.log("should Component Update");
    console.log(nextProps);
    console.log(nextState);
    return true;
  }
  //4
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
  //5
  getSnapshotBeforeUpdate(prevProps, prevStates) {
    console.log("getSnapShotBeforeUpdate");
    console.log(prevProps);
    console.log(prevStates);
    return {
      prevProps,
      prevStates,
    };
  }
  //6
  componentDidUpdate(prevProps, prevStates) {
    console.log("ComponentDidUpdate");
    console.log(prevProps);
    console.log(prevStates);
  }
}
