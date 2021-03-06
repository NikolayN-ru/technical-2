import {
  FETCH_PHONES_SUCCESS,
  MAIN_CITY,
  INPUT_QUESTION,
  BREAD_CAMPS_REPLASE,
  CLICK_BOARD_MAIN_MENU,
  CHECK_ITEMS_BTN,
  FETCH_ITEM,
  FETCH_LINK_NAVI_MENU,
  SERVICE_MENU_DOWN,
  MAIN_MENU_DOWN,
  SALE_MENU_DOWN,
  SERVICE_DATA,
  ADD_CART_ITEM,
  DEL_CART_ITEM,
  MESSAGE_WRITE,
  FAVORITES_DEL,
  FAVORITES_ADD,
  DATA_ITEM,
  BONUS_CART_ITEM,
  WRITE_CART_VALUE,
  USER_NUMBER,
} from "../actionTypes";
import { itemProps } from "./actions.interface";
import { Dispatch } from "redux";
import { countItemsBtn } from "redux/selectors";

export const fetchPhones = () => {
  return {
    type: FETCH_PHONES_SUCCESS,
  };
};

export const mainCity = (item: string) => async (dispatch: Dispatch) => {
  dispatch({
    type: MAIN_CITY,
    payload: item,
  });
};

export const inputQuestion = (question: string) => {
  return {
    type: INPUT_QUESTION,
    payload: question,
  };
};

export const breadCamps = (items: string[]) => (dispatch: Dispatch) => {
  dispatch({
    type: BREAD_CAMPS_REPLASE,
    payload: items,
  });
};

export const clickBoardMainMenu = (item:any) => (dispatch: Dispatch) => {
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
    const item = getState().marketData.data.find((item:any) => item.id === id);
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

export const changeMenuDownService = () => {
  return {
    type: SERVICE_MENU_DOWN,
  };
};

export const changeMenuUpMain = () => {
  return {
    type: MAIN_MENU_DOWN,
  };
};

export const changeMenuSale = () => {
  return {
    type: SALE_MENU_DOWN,
  };
};

export const changeMenuShop = () => (dispatch:Dispatch) => {
  dispatch({
    type: SERVICE_DATA,
  });
};

export const addCartItem = (id: number) => (dispatch:Dispatch, getState:any) => {
  const idItem = getState().marketData.data.find((item:any) => item.id === id);
  dispatch({
    type: ADD_CART_ITEM,
    payload: idItem,
  });
};

export const delCartItem = (id: number) => {
  return {
    type: DEL_CART_ITEM,
    payload: id,
  };
};

export const messageWrite = (m: string) => (dispatch:Dispatch) => {
  dispatch({
    type: MESSAGE_WRITE,
    payload: m,
  });
};

export const favoritesAdd = (item:any) => (dispatch:Dispatch) => {
  dispatch({
    type: FAVORITES_ADD,
    payload: item,
  });
};

export const favoritesDel = (id: number) => (dispatch:Dispatch, getState:any) => {
  const index = getState().favoritesData.favor.findIndex(
    (item:any) => item.id == id
  );
  dispatch({
    type: FAVORITES_DEL,
    payload: index,
  });
};

export const changeDataItem = (data = []) => {
  return {
    type: DATA_ITEM,
    payload: data,
  };
};

export const bonusCartItem = (bonus: string) => {
  return {
    type: BONUS_CART_ITEM,
    payload: bonus,
  };
};

export const writeValue = (value: string) => (dispatch:Dispatch) => {
  dispatch({
    type: WRITE_CART_VALUE,
    payload: value,
  });
};

export const userNumberData = (value: string) => {
  return {
    type: USER_NUMBER,
    payload: value,
  };
};
