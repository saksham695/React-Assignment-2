import PropTypes from "prop-types";
import React, { Component } from "react";
import { withRouter, BrowserRouter, Route, NavLink } from "react-router-dom";

import CategoryHeadings from "./CategoryHeadings";
import ItemList from "./ItemList";

import "./Category.css";

class CategoryComponent extends Component {
  // will refresh the page and will unselect all the selected items .
  refreshAll = () => {
    const { history } = this.props;
    history.push("/category");
  };

  // method to open list of selected category
  openCategory = (name) => {
    return () => {
      const { history } = this.props;
      history.push(`/category/` + name);
    };
  };

  render() {
    const { categoriesData } = this.props;
    const DISABLED_BUTTON = false;
    const BUTTON_COLOR = DISABLED_BUTTON ? "grey" : "red";

    return (
      <div className="category-container">
        {categoriesData.map(({ name }, index) => {
          return (
            <CategoryHeadings
              backgroundColor={"green"}
              key={index}
              name={name}
              onClick={this.openCategory(name)}
            />
          );
        })}
        <button
          className="refresh-button"
          onClick={this.refreshAll}
          style={{ backgroundColor: BUTTON_COLOR, right: 20, top: 10 }}
        >
          REFRESH
        </button>
        {categoriesData.map(({ name }, index) => {
          return (
            <BrowserRouter>
              <Route path={"/category/" + name}>
                <ItemList
                  item={categoriesData[index].items}
                  categoryName={categoriesData[index].name}
                  key={index}
                />
              </Route>
            </BrowserRouter>
          );
        })}
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

export default withRouter(CategoryComponent);
