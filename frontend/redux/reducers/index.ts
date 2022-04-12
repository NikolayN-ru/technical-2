import breadCamps from "../reducers/breadCamps";
import city from "../reducers/city";
import inputQuestion from "../reducers/inputQuestion";
import menuDown from "../reducers/menuDown";
import mainMenu from "../reducers/menuMain";
import phones from "../reducers/phones";
import boardMainMenu from "./boardMainMenu";
import itemData from "./itemData";
import mockDataItems from "./mockDataItems";
import { combineReducers } from "redux";

export default () =>
  combineReducers({
    phones,
    breadCamps,
    mainMenu,
    menuDown,
    city,
    inputQuestion,
    boardMainMenu,
    mockDataItems,
    itemData,
  });
