import React, { Component } from "react";

import CategoryHeadings from "./CategoryHeadings";
import ItemList from "./ItemList";

import { data } from "../data/data";

import "./Category.css";

export default class CategoryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: -1,
    };
  }

  // will refresh the page and will unselect all the selected items .
  refreshAll = () => {
    this.setState({
      position: -1,
    });
  };

  openCategory = (index) => {
    return () => {
      const { position } = this.state;
      console.log(position, index);
      if (position === index) {
        this.setState({ position: -1 });
      } else {
        this.setState({ position: index });
      }
    };
  };

  render() {
    const { categories } = data;
    const { position } = this.state;
    const DISABLED_BUTTON = position === -1 ? true : false;
    const BUTTON_COLOR = DISABLED_BUTTON ? "grey" : "red";

    return (
      <div className="category-container">
        {categories.map(({ name }, index) => {
          const HEADING_COLOR = index === position ? "greenyellow" : "green";
          return (
            <CategoryHeadings
              backgroundColor={HEADING_COLOR}
              key={index}
              name={name}
              onClick={this.openCategory(index)}
            />
          );
        })}
        <button
          className="refresh-button"
          disabled={DISABLED_BUTTON}
          onClick={this.refreshAll}
          style={{ backgroundColor: BUTTON_COLOR, right: 20, top: 10 }}
        >
          REFRESH
        </button>

        {position > -1 ? <ItemList item={categories[position]} /> : null}
      </div>
    );
  }
}
