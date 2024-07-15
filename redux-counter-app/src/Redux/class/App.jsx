import React, { Component } from "react";
// import store from "../functional/store/store/store";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div>
        <center>
          <p>counter : {this.props.counter}</p>
          <button onClick={() => this.props.increment(1)}>Increment</button>
          <button onClick={this.props.decrement}>Decrement</button>
        </center>
      </div>
    );
  }
}
const stateMapToProps = (store) => {
  return {
    counter: store.counter,
  };
};
const dispatchMapToProps = (dispatch) => {
  return {
    increment: (value) => dispatch({ type: "increment", payload: value }),
    decrement: () => dispatch({ type: "decrement", payload: 1 }),
  };
};
export default connect(stateMapToProps, dispatchMapToProps)(App);
