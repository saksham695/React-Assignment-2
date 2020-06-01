import PropTypes from "prop-types";
import React from "react";

import Identity from "lodash/identity";

import "./Category.css";

export default function ShowListItem(props) {
  const { listItems } = props;
  return (
    <div
      className="display-list-box"
      style={{
        backgroundColor: "pink",
      }}
    >
      <h4 className="list-text">{listItems}</h4>
    </div>
  );
}
ShowListItem.propTypes = {
  backgroundColor: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

ShowListItem.defaultProps = {
  name: "Wheat",
  onClick: Identity,
};
