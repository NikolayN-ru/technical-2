import { boardMainMenu } from "./boardMainMenu";
import { breadCamps } from "./breadCamps";
import { city } from "./city";
import { formUser } from "./formUser";
import { inputQuestion } from "./inputQuestion";
import { itemData } from "./itemData";
import { menuDown } from "./menuDown";
import { mainMenu } from "./menuMain";
import { mockDataItems } from "./mockDataItems";
import { naviMenu } from "./naviMenu";
import { phones } from "./phones";
import { combineReducers } from "redux";

// eslint-disable-next-line import/no-anonymous-default-export
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
    naviMenu,
    formUser,
  });
