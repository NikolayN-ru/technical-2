import { MAIN_MENU_DOWN, SALE_MENU_DOWN, SERVICE_DATA, SERVICE_MENU_DOWN } from "../actionTypes";

const initialState = [
  { id: 1, title: "ОБъявления", icon: "/list.svg" },
  { id: 2, title: "Магазины", icon: "/magazine.svg" },
  { id: 3, title: "Благотворительность", icon: "/handle.svg" },
];

const serviceData = [
  {id: 1, title: "Что мы чиним", icon:'/settings.png'},
  {id: 2, title: "Адреса сервисов", icon: "/home.png"},
]

const marketData = [
  {id: 1, title: "Каталог товаров", icon:'/list.svg'},
  {id: 2, title: "Доставка и оплата", icon: "/car.svg"},
]

const serviceSale = [
  {id: 1, title: "Что мы покупаем", icon:'/list.svg'},
  {id: 2, title: "Адреса скупок ", icon: "/home.png"},
]

export const menuDown = (state = initialState, { type, payload }:any) => {
  switch (type) {
    case SERVICE_MENU_DOWN:
      return serviceData
    case MAIN_MENU_DOWN:
      return initialState
    case SALE_MENU_DOWN:
      return serviceSale
    case SERVICE_DATA:
      return marketData
    default:
      return state;
  }
};
