import { boardMainMenuStateProps } from "./boardMainMenuData.interface";

export const boardMainMenuState: boardMainMenuStateProps = {
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
