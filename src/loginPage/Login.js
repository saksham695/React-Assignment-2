import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";

import ButtonComponent from "./button/Button";
import InputComponent from "./inputField/Input";
import { loginPage, inputControl } from "../store/actions/actions";

import Identity from "lodash/identity";

import "./Login.css";

class Login extends Component {
  render() {
    const { pageDetails, loginButton } = this.props;
    const { loginDetails, buttonStatus, display } = pageDetails;
    const credentialsKeys = Object.keys(loginDetails);
    return (
      <div className="box-wrapper">
        <h1 className="box-heading">LOGIN PAGE</h1>

        <div className="input-box">
          {credentialsKeys.map((type, index) => {
            return (
              <InputComponent
                handleChange={this.props.inputFieldControls}
                inputType={type}
                key={index}
              />
            );
          })}
          <ButtonComponent
            buttonStatus={buttonStatus}
            onButtonClick={loginButton}
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
const mapStateToProps = (state) => {
  return {
    pageDetails: state.loginReducer,
  };
};
const mapDispatchToState = (dispatch) => {
  return {
    inputFieldControls: (inputValue, inputType) => {
      dispatch(inputControl(inputValue, inputType));
    },
    loginButton: () => {
      dispatch(loginPage());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToState)(Login);
