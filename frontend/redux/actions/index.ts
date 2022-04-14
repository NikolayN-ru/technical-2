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
import { itemProps } from "./actions.interface";
import { Dispatch } from "redux";
import { countItemsBtn } from "redux/selectors";

export const fetchPhones = () => async (dispatch: Dispatch) => {
  dispatch({
    type: FETCH_PHONES_SUCCESS,
  });
};

export const mainCity = (item: string) => async (dispatch: Dispatch) => {
  dispatch({
    type: MAIN_CITY,
    payload: item,
  });
};

export const inputQuestion = (question: string) => (dispatch: Dispatch) => {
  dispatch({
    type: INPUT_QUESTION,
    payload: question,
  });
};

export const breadCamps = (items: string[]) => (dispatch: Dispatch) => {
  dispatch({
    type: BREAD_CAMPS_REPLASE,
    payload: items,
  });
};

export const clickBoardMainMenu = (item) => (dispatch: Dispatch) => {
  dispatch({
    type: CLICK_BOARD_MAIN_MENU,
    payload: item,
  });
};

export const checkItems = () => (dispatch: Dispatch, getState: () => any) => {
  const stat = countItemsBtn(getState());
  dispatch({
    type: CHECK_ITEMS_BTN,
    payload: stat,
  });
};

export const fetchItem =
  (id: number) => (dispatch: Dispatch, getState: () => any) => {
    const item = getState().mockDataItems.data.find((item) => item.id === id);
    dispatch({
      type: FETCH_ITEM,
      payload: item,
    });
  };

export const clickNaviMenuItem =
  (title: string) => async (dispatch: Dispatch, getState: () => any) => {
    const menu = getState().naviMenu.menu;
    menu.forEach((item: itemProps) => {
      item.title == title ? (item.active = true) : (item.active = false);
    });
    dispatch({
      type: FETCH_LINK_NAVI_MENU,
      payload: menu,
    });
  };
