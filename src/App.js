import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CategoryComponent from "./categoryPage/category/CategoryComponent";
import Login from "./loginPage/Login";

import { data } from "./categoryPage/data/data";

export default class App extends Component {
  // navigate to category page on  successful login

  render() {
    const { categories } = data;

    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/category">
              <CategoryComponent categoriesData={categories} exact />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
