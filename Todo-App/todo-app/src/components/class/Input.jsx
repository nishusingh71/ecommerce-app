import React, { Component } from "react";
import toast from "react-hot-toast";

export default class Input extends  Component {
  constructor() {
    super();
    this.state = {
      todo: "",
    };
  }
  inputChange = (event) => {
    this.setState({
      todo: event.target.value,
    });
  };
  submit = (event) => {
    event.preventDefault();
    if (this.state.todo) {
      // if (this.props.todos.includes(this.state.todo)) {
      //   toast.error("todo already exists");
      // }
      if (this.props.editData.index == -1) {
        this.props.addTodo(this.state.todo);
      }
    } else {
      this.props.updateTodo(this.props.editData.index, this.state.todo);
    }
    this.setState({
      todo: "",
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.editData.index !== this.props.editData.index) {
      this.setState({
        todo: this.props.editData.data,
      });
    }
  }
  render() {
    return (
      <section>
        <form onSubmit={this.submit} noValidate>
          <div className="row">
            <div className="col-10">
              <input
                type="text"
                className="form-control"
                value={this.state.todo}
                onChange={this.inputChange}
              />
            </div>
            <div className="col-2">
              <button className="btn btn-primary" disabled={!this.state.todo}>
                {this.props.editData.index === -1 ? "Add" : "Update"}
              </button>
            </div>
          </div>
        </form>
      </section>
    );
  }
}
