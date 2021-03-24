import React, { Component } from "react";

export default class TodoForm extends Component {
  state = {
    item: {},
  };

  getItem = (e) => {
    this.setState({ item: { value: e.target.value, done: false } });
  };

  render() {
    return (
      <div className="form">
        <input
          className="item-input"
          type="text"
          onChange={(e) => this.getItem(e)}
        />
        <button
          className="btn btn__add"
          onClick={() => this.props.addItem(this.state.item)}
        ></button>
      </div>
    );
  }
}
