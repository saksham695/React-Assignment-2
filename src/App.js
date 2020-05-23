import React, { Component } from "react";
import Login from "./loginPage/Login";
import CategoryComponent from "./categoryPage/category/CategoryComponent";

//TODO 1:add prop types and default props
//TODO 2:use loadash where needed
//TODO 3:add comments , check naming , sort lines
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
