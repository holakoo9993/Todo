import React, { Component } from "react";

export default class Todo extends Component {
  render() {
    return (
      <div className="item-div">
        <li
          onClick={() => this.props.toggleTodo(this.props.index)}
          className={this.props.done ? "done" : ""}
        >
          {this.props.value}
        </li>
        <button
          className="btn btn__delete"
          onClick={() => this.props.deleteItem(this.props.index)}
        ></button>
      </div>
    );
  }
}
