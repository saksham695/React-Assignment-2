import PropTypes from "prop-types";
import React, { Component } from "react";

import CategoryHeadings from "./CategoryHeadings";
import ItemList from "./ItemList";

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

  // method to open list of selected category
  openCategory = (index) => {
    return () => {
      const { position } = this.state;
      if (position === index) {
        this.setState({ position: -1 });
      } else {
        this.setState({ position: index });
      }
    };
  };

  render() {
    console.log(this.props);
    const { categoriesData } = this.props;
    const { position } = this.state;
    const DISABLED_BUTTON = position === -1 ? true : false;
    const BUTTON_COLOR = DISABLED_BUTTON ? "grey" : "red";

    return (
      <div className="category-container">
        {categoriesData.map(({ name }, index) => {
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

        {position > -1 ? <ItemList item={categoriesData[position]} /> : null}
      </div>
    );
  }
}

CategoryComponent.propTypes = {
  categoriesData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          name: PropTypes.string,
          description: PropTypes.string,
        })
      ),
    })
  ),
};

CategoryComponent.defaultProps = {
  categoriesData: [
    {
      name: "Food",
      items: [
        {
          id: "d1",
          name: "Wheat",
          description: "Used to make Roti",
        },
      ],
    },
  ],
};
