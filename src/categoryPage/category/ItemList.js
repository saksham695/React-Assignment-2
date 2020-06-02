import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";

import { openList } from "../../store/actions/actions";
import ShowDescription from "./ShowDescription";
import ShowListItem from "./ShowListItem";

import "./Category.css";

class ItemList extends Component {
  render() {
    const { item, pageCounter } = this.props;

    return (
      <div className="list-wrapper">
        <div className="list-container">
          {item.map((itemList, index) => {
            const HEADING_COLOR = index === pageCounter ? "pink" : "lightblue";
            return (
              <ShowListItem
                backgroundColor={HEADING_COLOR}
                key={itemList.id}
                index={index}
                listItems={itemList.name}
                onClick={this.props.listOpener}
              />
            );
          })}
        </div>
        {pageCounter !== -1 ? (
          <ShowDescription description={item[pageCounter].description} />
        ) : null}
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
const mapStateToProps = (state) => {
  return {
    pageCounter: state.categoryReducer.listState,
  };
};
const mapDispatchToState = (dispatch) => {
  return {
    listOpener: (index) => {
      dispatch(openList(index));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToState)(ItemList);
