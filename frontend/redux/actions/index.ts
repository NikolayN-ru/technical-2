import { countItemsBtn, getItemData } from "redux/selectors";
import {
  FETCH_PHONES_SUCCESS,
  MAIN_CITY,
  INPUT_QUESTION,
  BREAD_CAMPS_REPLASE,
  CLICK_BOARD_MAIN_MENU,
  CHECK_ITEMS_BTN,
  FETCH_ITEM
} from "../actionTypes";

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
    payload: items
  })
}

export const clickBoardMainMenu = (item) => (dispatch) => {
  dispatch({
    type: CLICK_BOARD_MAIN_MENU,
    payload: item
  })
}

export const checkItems = () => (dispatch, getState) => {
  const stat = countItemsBtn(getState())
  dispatch({
    type: CHECK_ITEMS_BTN,
    payload: stat
  })
}

export const fetchItem = (id) => (dispatch, getState) => {
  const data = getItemData(id, getState())
  // console.log(data)
  dispatch({
    type: FETCH_ITEM,
    payload: data
  })
}
