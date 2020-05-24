import React, { Component } from "react";

import CategoryComponent from "./categoryPage/category/CategoryComponent";
import Login from "./loginPage/Login";

import { data } from "./categoryPage/data/data";
//TODO 1:add prop types and default props
//TODO 2:use loadash where needed

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPage: 1,
    };
  }

  // navigate to category page on  successful login
  changePage = () => {
    this.setState({
      displayPage: !this.state.displayPage,
    });
  };

  render() {
    const { displayPage } = this.state;
    const { categories } = data;

    return (
      <div>
        {displayPage ? (
          <Login changePage={this.changePage} />
        ) : (
          <CategoryComponent
            changePage={this.changePage}
            categoriesData={categories}
          />
        )}
      </div>
    );
  }
}
