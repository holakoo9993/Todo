import React, { Component } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class TodoContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  addItem = (item) => {
    const newTodos = [...this.state.todos];
    newTodos.push({ ...item });
    this.setState({ todos: newTodos });
  };

  deleteItem = (index) => {
    const newTodos = [...this.state.todos];
    newTodos.splice(index, 1);
    this.setState({ todos: newTodos });
  };

  toggleTodo = (index) => {
    const newTodos = [...this.state.todos];
    newTodos[index].done = !newTodos[index].done;
    this.setState({ todos: newTodos });
  };

  render() {
    return (
      <div>
        <h1 className="title">Todo App</h1>
        <TodoForm addItem={this.addItem} />
        <hr />
        <TodoList
          toggleTodo={this.toggleTodo}
          deleteItem={this.deleteItem}
          todosItems={this.state.todos}
        />
      </div>
    );
  }
}

export default TodoContainer;
