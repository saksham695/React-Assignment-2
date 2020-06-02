import categoryReducer from "./categoryReducer";
import loginReducer from "./loginPageReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ categoryReducer, loginReducer });

export default rootReducer;
