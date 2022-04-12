import { MAIN_MENU } from "../actionTypes";

const initialState = [
  { id: 1, title: "Доска объявлений" },
  { id: 2, title: "Сервисный центр" },
  { id: 3, title: "Интернет-магазин Dily.ru" },
  { id: 4, title: "Скупка" },
];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case MAIN_MENU:
      return state;
    default:
      return state;
  }
};
