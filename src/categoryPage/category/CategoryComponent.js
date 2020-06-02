import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";

import CategoryHeadings from "./CategoryHeadings";
import ItemList from "./ItemList";
import { refreshAll, openCategory } from "../../store/actions/actions";

import "./Category.css";

class CategoryComponent extends Component {
  // method to open list of selected category

  render() {
    const { categoriesData, pageCounter } = this.props;
    const DISABLED_BUTTON = pageCounter === -1 ? true : false;
    const BUTTON_COLOR = DISABLED_BUTTON ? "grey" : "red";

    return (
      <div className="category-container">
        {categoriesData.map(({ name }, index) => {
          const HEADING_COLOR = index === pageCounter ? "greenyellow" : "green";
          return (
            <CategoryHeadings
              backgroundColor={HEADING_COLOR}
              key={index}
              name={name}
              onClick={this.props.categoryOpener}
              index={index}
            />
          );
        })}
        <button
          className="refresh-button"
          disabled={DISABLED_BUTTON}
          onClick={this.props.refreshPage}
          style={{ backgroundColor: BUTTON_COLOR, right: 20, top: 10 }}
        >
          REFRESH
        </button>

        {pageCounter > -1 ? (
          <ItemList item={categoriesData[pageCounter].items} />
        ) : null}
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

const mapStateToProps = (state) => {
  console.log(state.categoryReducer.categoryState);
  return {
    pageCounter: state.categoryReducer.categoryState,
  };
};
const mapDispatchToState = (dispatch) => {
  return {
    refreshPage: () => {
      dispatch(refreshAll());
    },

    categoryOpener: (index) => {
      dispatch(openCategory(index));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToState)(CategoryComponent);
