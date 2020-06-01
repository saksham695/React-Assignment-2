import PropTypes from "prop-types";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import ButtonComponent from "./button/Button";
import InputComponent from "./inputField/Input";

import Identity from "lodash/identity";

import { KEYS } from "./keys/keys";

import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonStatus: true,
      display: false,
      loginDetails: { emailID: "", password: "" },
    };
  }

  buttonClicked = () => {
    const { loginDetails } = this.state;
    const { history } = this.props;
    if (
      loginDetails.emailID !== KEYS.EMAIL_ID ||
      loginDetails.password !== KEYS.PASSWORD
    ) {
      this.setState({
        display: true,
      });
    } else {
      history.push("/category");
    }
  };

  handleChange = (value, inputType) => {
    const { loginDetails } = { ...this.state };
    loginDetails[inputType] = value;
    const { emailID, password } = loginDetails;
    const newButtonStatus =
      emailID.length > 0 && password.length > 0 ? false : true;

    this.setState({
      buttonStatus: newButtonStatus,
      loginDetails: loginDetails,
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
                handleChange={this.handleChange}
                inputType={type}
                key={index}
              />
            );
          })}
          <ButtonComponent
            buttonStatus={buttonStatus}
            onButtonClick={this.buttonClicked}
            title={"LOGIN"}
          />
          {display ? (
            <h3 className="login-result-header">INCORRECT LOGIN CREDENTIALS</h3>
          ) : null}
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  changePage: PropTypes.func,
};

Login.defaultProps = {
  changePage: Identity,
};
export default withRouter(Login);
