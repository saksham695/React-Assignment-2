import React from "react";
import { increment } from "./actions/index";
//import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";

class Learning extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.incrementCounter();
          }}
        >
          Clicked {this.props.counter} times
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counterReducer,
  };
};
const mapDispatchToState = (dispatch) => {
  return {
    incrementCounter: () => {
      dispatch(increment(5));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToState)(Learning);
