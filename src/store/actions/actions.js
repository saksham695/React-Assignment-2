export const openCategory = (val) => {
  console.log("openCategory", val);
  return {
    type: "CATEGORY_OPEN",
    payload: val,
  };
};
export const openList = (val) => {
  return {
    type: "LIST_OPEN",
    payload: val,
  };
};
export const refreshAll = () => {
  return {
    type: "REFRESH",
  };
};

export const loginPage = () => {
  return {
    type: "LOGIN",
  };
};

export const inputControl = (inputValue, inputType) => {
  return {
    type: "INPUT_FIELD",
    inputValue: inputValue,
    inputType: inputType,
  };
};
