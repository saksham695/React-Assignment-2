import { KEYS } from "../../loginPage/keys/keys";

const initialState = {
  displayPage: 1,
  buttonStatus: true,
  display: false,
  loginDetails: { emailID: "", password: "" },
};

const loginReducer = (state = initialState, action) => {
  if (action.type === "INPUT_FIELD") {
    const { loginDetails } = { ...state };
    loginDetails[action.inputType] = action.inputValue;
    const { emailID, password } = loginDetails;
    const newButtonStatus =
      emailID.length > 0 && password.length > 0 ? false : true;
    return {
      ...state,
      buttonStatus: newButtonStatus,
      loginDetails: loginDetails,
    };
  }
  if (action.type === "LOGIN") {
    const { loginDetails } = { ...state };
    if (
      loginDetails.emailID !== KEYS.EMAIL_ID ||
      loginDetails.password !== KEYS.PASSWORD
    ) {
      return {
        ...state,
        display: true,
      };
    }
    return {
      ...state,
      displayPage: 0,
    };
  }
  return state;
};

export default loginReducer;
