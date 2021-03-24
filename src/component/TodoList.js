import React, { Component } from "react";
import Todo from "./Todo";

export default class TodoList extends Component {
  render() {
    const todosItems = this.props.todosItems.map((item, index) => {
      return (
        <Todo
          index={index}
          deleteItem={this.props.deleteItem}
          toggleTodo={this.props.toggleTodo}
          done={item.done}
          value={item.value}
          key={index}
        />
      );
    });

    return <ul>{todosItems}</ul>;
  }
}
