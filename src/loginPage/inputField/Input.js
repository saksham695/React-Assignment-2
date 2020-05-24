import React, { Component } from "react";

import "./Input.css";

export default class InputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  handleInputControl = (inputType) => {
    return (event) => {
      const inputFieldValue = event.target.value;
      this.setState({ text: inputFieldValue }, () =>
        this.props.handleChange(this.state.text, inputType)
      );
    };
  };

  render() {
    const { inputType } = this.props;
    return (
      <>
        <label className="input-box-wrapper">
          <input
            className="input-box"
            onChange={this.handleInputControl(inputType)}
            placeholder={inputType}
            type={inputType}
            value={this.state.text}
          />
        </label>
      </>
    );
  }
}
