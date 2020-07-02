import { combineReducers } from "redux";
import authReducers from "./authReducers";
import errorReducers from "./errorReducer.js";

export default combineReducers({
    auth: authReducers,
    errors: errorReducers,
});
