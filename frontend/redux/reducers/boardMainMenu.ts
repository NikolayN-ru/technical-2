import { CLICK_BOARD_MAIN_MENU, CHECK_ITEMS_BTN } from "../actionTypes";

const initialState = {
  items: [
    { id: 1, title: "Всего", num: 17 },
    { id: 2, title: "Активные", num: 10 },
    { id: 3, title: "Неактивные", num: 5 },
    { id: 4, title: "Объявления со ставками", num: 5 },
    { id: 5, title: "Мои предложения", num: 4 },
    { id: 6, title: "Продано", num: 2 },
  ],
  active: "Активные",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CLICK_BOARD_MAIN_MENU:
      return {
        ...state,
        active: payload,
      };
    case CHECK_ITEMS_BTN:
      console.log(state.items[1].num)
      const newArray = {...state}
      newArray.items[0].num = payload.total
      newArray.items[1].num = payload.active
      newArray.items[2].num = payload.noActive
      newArray.items[3].num = payload.buy
      newArray.items[5].num = payload.sold
      return {
        ...newArray
      }
    default:
      return state;
  }
};
