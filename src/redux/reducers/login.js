const loginReducer = (state = { name: "react", password: "123" }, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default loginReducer;
