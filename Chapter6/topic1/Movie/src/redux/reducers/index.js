import { combineReducers } from "redux";
import authReducer from "./authReducer";

// It will be make the redducers to be one temporary state database
// Reducer is like table in database
// And here we will list all the table into one database
export default combineReducers({
  auth: authReducer,
});
