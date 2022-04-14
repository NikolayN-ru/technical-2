import { MAIN_MENU } from "../actionTypes";

const initialState = [
  { id: 1, title: "Доска объявлений", linkItem: "/board" },
  { id: 2, title: "Сервисный центр", linkItem: "/center" },
  { id: 3, title: "Интернет-магазин Dily.ru", linkItem: "/market" },
  { id: 4, title: "Скупка", linkItem: "/sale" },
];

export const mainMenu =  (state = initialState, { type, payload }: any) => {
  switch (type) {
    case MAIN_MENU:
      return state;
    default:
      return state;
  }
};
