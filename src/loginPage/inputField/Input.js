import React, { Component } from "react";
import { connect } from "react-redux";

import "./Input.css";

class InputComponent extends Component {
  handleInputControl = (inputType) => {
    return (event) => {
      const inputFieldValue = event.target.value;
      this.props.handleChange(inputFieldValue, inputType);
    };
  };

  render() {
    const { inputType, inputFieldValues } = this.props;
    return (
      <>
        <label className="input-box-wrapper">
          <input
            className="input-box"
            onChange={this.handleInputControl(inputType)}
            placeholder={inputType}
            type={inputType}
            value={inputFieldValues[inputType]}
          />
        </label>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    inputFieldValues: state.loginReducer,
  };
};
export default connect(mapStateToProps)(InputComponent);
