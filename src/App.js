import React, { Component } from "react";
import Login from "./loginPage/Login";
import CategoryComponent from "./categoryPage/category/CategoryComponent";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPage: 1,
    };
  }
  changePage = () => {
    this.setState({
      displayPage: !this.state.displayPage,
    });
  };

  render() {
    const { displayPage } = this.state;
    return (
      <div>
        {displayPage ? (
          <Login changePage={this.changePage} />
        ) : (
          <CategoryComponent changePage={this.changePage} />
        )}
      </div>
    );
  }
}
