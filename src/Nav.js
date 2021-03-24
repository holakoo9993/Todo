import React, { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <button
          className="btn nav-btn"
          onClick={() => this.props.changePage("todoApp")}
        >
          App
        </button>
        <button
          className="btn nav-btn"
          onClick={() => this.props.changePage("about")}
        >
          About
        </button>
      </div>
    );
  }
}
