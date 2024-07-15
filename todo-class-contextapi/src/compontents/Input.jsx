import React, { Component } from "react";
import { store } from "../contextapi/store/store";

class Input extends Component {
  static contextType = store;

  constructor() {
    super();
    this.state = {
      todo: "",
      editDataIndex: -1,
      editDataValue: "",
    };
  }

  componentDidMount() {
    const { editData } = this.context;

    this.setState({
      todo: editData.data,
      editDataIndex: editData.index,
      editDataValue: editData.data,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { editData } = this.context;
    if (
      editData &&
      (editData.index !== this.state.editDataIndex ||
        editData.data !== this.state.editDataValue)
    ) {
      this.setState({
        todo: editData.data,
        editDataIndex: editData.index,
        editDataValue: editData.data,
      });
    }
  }

  submit = (event) => {
    event.preventDefault();
    const { addTodo, updateTodo, editData } = this.context;
    const { todo } = this.state;

    if (editData.index === -1) {
      addTodo(todo);
    } else {
      updateTodo(editData.index, todo);
    }

    this.setState({ todo: "" });
  };

  inputChange = (event) => {
    this.setState({ todo: event.target.value });
  };

  render() {
    const { editData } = this.context;
    const { todo } = this.state;
    return (
      <section>
        <form onSubmit={this.submit} noValidate>
          <div className="row">
            <div className="col-10">
              <input
                type="text"
                placeholder="Enter Your todos"
                className="form-control"
                value={todo}
                onChange={this.inputChange}
              />
            </div>
            <div className="col-2">
              <button className="btn btn-primary" disabled={!todo}>
                {editData.index === -1 ? "Add" : "Update"}
              </button>
            </div>
          </div>
        </form>
      </section>
    );
  }
}

export default Input;
