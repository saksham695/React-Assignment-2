import PropTypes from "prop-types";
import React from "react";

import Identity from "lodash/identity";

import "./Category.css";

export default class ShowListItem extends React.Component {
  handleOnClick = () => {
    const { onClick, index } = this.props;
    return onClick(index);
  };
  render() {
    const { listItems, backgroundColor } = this.props;
    return (
      <div
        className="display-list-box"
        onClick={this.handleOnClick}
        style={{
          backgroundColor: backgroundColor,
        }}
      >
        <h4 className="list-text">{listItems}</h4>
      </div>
    );
  }
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
