import React, { Component } from "react";
import "./App.css";
import TodoContainer from "./TodoContainer";
import About from "./About";
import Nav from "./Nav";
export default class App extends Component {
  state = {
    page: "todoApp",
  };

  changePage = (pageName) => {
    this.setState({ page: pageName });
  };

  render() {
    const displayedPage =
      this.state.page === "todoApp" ? (
        <TodoContainer />
      ) : (
        <About name="Author" />
      );
    return (
      <div className="App">
        <Nav changePage={this.changePage} />
        {displayedPage}
      </div>
    );
  }
}
