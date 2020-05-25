import PropTypes from "prop-types";
import React from "react";

import Identity from "lodash/identity";

import "./Category.css";

export default function CategoryHeadings(props) {
  const { name, onClick, backgroundColor } = props;
  return (
    <div
      className="category-heading"
      onClick={onClick}
      style={{ backgroundColor: backgroundColor }}
    >
      <h2 className="heading-text">{name}</h2>
    </div>
  );
}

CategoryHeadings.propTypes = {
  backgroundColor: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

CategoryHeadings.defaultProps = {
  backgroundColor: "green",
  name: "Food",
  onClick: Identity,
};
