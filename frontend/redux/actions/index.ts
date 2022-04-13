import {
  FETCH_PHONES_SUCCESS,
  MAIN_CITY,
  INPUT_QUESTION,
  BREAD_CAMPS_REPLASE,
  CLICK_BOARD_MAIN_MENU,
  CHECK_ITEMS_BTN,
  FETCH_ITEM,
  FETCH_LINK_NAVI_MENU,
} from "../actionTypes";
import { countItemsBtn, getItemData } from "redux/selectors";

export const fetchPhones = () => async (dispatch) => {
  dispatch({
    type: FETCH_PHONES_SUCCESS,
  });
};

export const mainCity = (item) => async (dispatch) => {
  dispatch({
    type: MAIN_CITY,
    payload: item,
  });
};

export const inputQuestion = (question) => (dispatch) => {
  dispatch({
    type: INPUT_QUESTION,
    payload: question,
  });
};

export const breadCamps = (items) => (dispatch) => {
  dispatch({
    type: BREAD_CAMPS_REPLASE,
    payload: items,
  });
};

export const clickBoardMainMenu = (item) => (dispatch) => {
  dispatch({
    type: CLICK_BOARD_MAIN_MENU,
    payload: item,
  });
};

export const checkItems = () => (dispatch, getState) => {
  const stat = countItemsBtn(getState());
  dispatch({
    type: CHECK_ITEMS_BTN,
    payload: stat,
  });
};

export const fetchItem = (id) => (dispatch, getState) => {
  // const data = getItemData(id, getState())
  const item = getState().mockDataItems.data.find((item) => item.id === id);
  // const data = getState().mockDataItems.data[id];
  dispatch({
    type: FETCH_ITEM,
    payload: item,
  });
};

export const clickNaviMenuItem = (title) => (dispatch, getState) => {
  const menu = getState().naviMenu.menu;
  menu.forEach((item ) => {
    item.title == title ? item.active=true : item.active=false
  } );
  dispatch({
    type: FETCH_LINK_NAVI_MENU,
    payload: menu,
  });
};
