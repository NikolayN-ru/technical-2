import phones from "../reducers/phones";
import { combineReducers } from "redux";

export default () =>
  combineReducers({
    phones,
  });
