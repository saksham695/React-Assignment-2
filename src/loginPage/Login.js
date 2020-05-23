import React, { Component } from "react";
import ButtonComponent from "./button/Button";
import InputComponent from "./inputField/Input";
import { KEYS } from "./keys/keys";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginDetails: { emailID: "", password: "" },
      buttonStatus: true,
      display: false,
    };
  }

  buttonClicked = () => {
    const { loginDetails } = this.state;
    if (
      loginDetails.emailID !== KEYS.EMAIL_ID ||
      loginDetails.password !== KEYS.PASSWORD
    ) {
      this.setState({
        display: true,
      });
    } else {
      this.props.changePage();
    }
  };

  handleChange = (value, inputType) => {
    const { loginDetails } = { ...this.state };
    loginDetails[inputType] = value;
    const { emailID, password } = loginDetails;
    const newButtonStatus =
      emailID.length > 0 && password.length > 0 ? false : true;

    this.setState({
      loginDetails: loginDetails,
      buttonStatus: newButtonStatus,
    });
  };

  render() {
    const { loginDetails, buttonStatus, display } = this.state;
    const credentialsKeys = Object.keys(loginDetails);
    return (
      <div className="box-wrapper">
        <h1 className="box-heading">LOGIN PAGE</h1>

        <div className="input-box">
          {credentialsKeys.map((type, index) => {
            return (
              <InputComponent
                inputType={type}
                key={index}
                handleChange={this.handleChange}
              />
            );
          })}
          <ButtonComponent
            onButtonClick={this.buttonClicked}
            title={"LOGIN"}
            buttonStatus={buttonStatus}
          />
          {display ? (
            <h3 className="login-result-header">INCORRECT LOGIN CREDENTIALS</h3>
          ) : null}
        </div>
      </div>
    );
  }
}
