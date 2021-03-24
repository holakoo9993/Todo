import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="about">
        This is a simple Todo App made by {this.props.name}
      </div>
    );
  }
}
