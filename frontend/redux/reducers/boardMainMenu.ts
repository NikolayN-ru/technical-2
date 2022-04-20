import { CLICK_BOARD_MAIN_MENU, CHECK_ITEMS_BTN } from "../actionTypes";
import { actionProps } from "./interface";
import { boardMainMenuState } from "mockData/boardMainMenuData";
import { boardMainMenuStateProps } from "mockData/boardMainMenuData/boardMainMenuData.interface";

const initialState: boardMainMenuStateProps = boardMainMenuState;

export const boardMainMenu = (
  state = initialState,
  { type, payload }: actionProps
) => {
  switch (type) {
    case CLICK_BOARD_MAIN_MENU:
      return {
        ...state,
        active: payload,
      };
    case CHECK_ITEMS_BTN:
      const newArray = { ...state };
      newArray.items[0].num = payload.total;
      newArray.items[1].num = payload.active;
      newArray.items[2].num = payload.noActive;
      newArray.items[3].num = payload.buy;
      newArray.items[5].num = payload.sold;
      return {
        ...newArray,
      };
    default:
      return state;
  }
};
