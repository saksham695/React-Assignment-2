import React, { Component } from "react";
import { connect } from "react-redux";

import CategoryComponent from "./categoryPage/category/CategoryComponent";
import Login from "./loginPage/Login";

import { data } from "./categoryPage/data/data";

class App extends Component {
  render() {
    const { displayPage } = this.props.displayPage;
    const { categories } = data;

    return (
      <div>
        {displayPage ? (
          <Login changePage={this.changePage} />
        ) : (
          <CategoryComponent categoriesData={categories} />
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    displayPage: state.loginReducer,
  };
};
export default connect(mapStateToProps)(App);
