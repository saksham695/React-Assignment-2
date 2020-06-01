import PropTypes from "prop-types";
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import ShowDescription from "./ShowDescription";
import ShowListItem from "./ShowListItem";

import "./Category.css";

export default class ItemList extends Component {
  render() {
    const { item, categoryName } = this.props;
    console.log(item);
    return (
      <div className="list-wrapper">
        <div className="list-container">
          {item.map(({ name }, index) => {
            return <ShowListItem listItems={name} />;
          })}
        </div>
        {item.map(({ name }, index) => {
          return (
            <BrowserRouter>
              <Route path={"/category/" + categoryName + "/" + name}>
                <ShowDescription description={item.description} />
              </Route>
            </BrowserRouter>
          );
        })}
      </div>
    );
  }
}

ItemList.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

ItemList.defaultProps = {
  item: [
    {
      id: "jnq",
      name: "Wheat",
      description: "Used to make Roti",
    },
  ],
};
