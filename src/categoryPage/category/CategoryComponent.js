import React, { Component } from "react";
import { data } from "../data/data";
import CategoryHeadings from "./CategoryHeadings";
import ItemList from "./ItemList";
export default class CategoryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: -1,
    };
  }
  refreshAll = () => {
    this.setState({
      position: -1,
    });
  };

  handleChange = (index) => {
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
    const disabledButton = position === -1 ? true : false;
    const BUTTON_COLOR = disabledButton ? "grey" : "red";

    return (
      <div
        style={{ width: "100vw", height: "100vw", backgroundColor: "purple" }}
      >
        {categories.map(({ name }, index) => {
          const HEADING_COLOR = index === position ? "greenyellow" : "green";
          return (
            <CategoryHeadings
              name={name}
              key={index}
              onClick={this.handleChange(index)}
              backgroundColor={HEADING_COLOR}
            />
          );
        })}
        <button
          onClick={this.refreshAll}
          style={{
            width: "15%",
            position: "absolute",
            right: 20,
            top: 10,
            height: "5%",
            backgroundColor: BUTTON_COLOR,
          }}
          disabled={disabledButton}
        >
          REFRESH
        </button>

        {position > -1 ? <ItemList item={categories[position]} /> : null}
      </div>
    );
  }
}
