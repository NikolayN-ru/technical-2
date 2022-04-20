import {
  ADD_CART_ITEM,
  BONUS_CART_ITEM,
  DEL_CART_ITEM,
  WRITE_CART_VALUE,
} from "../actionTypes";

const initialState = {
  cart: [],
  total: 0,
  sale: 0,
  bonus: false,
  // valueBonus: "",
};

export const cartItems = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CART_ITEM:
      const totalPrice = (state.total += payload.price);
      return { ...state, cart: [...state.cart, payload], total: totalPrice, sale:0, bonus:false};
    case DEL_CART_ITEM:
      if (state.cart.length == 1) {
        return initialState
      }
      const newState = {
        ...state,
        cart: [
          ...state.cart.slice(0, payload),
          ...state.cart.slice(payload, -1),
        ],
        bonus: false,
        sale: 0
      };
      let totalNew = 0;
      newState.cart.forEach((item) => (totalNew += item.price));
      return { ...newState, total: totalNew };
    case BONUS_CART_ITEM:
      if (payload === "bonus" && !state.bonus) {
        return {
          ...state,
          total: state.total * 0.75,
          bonus: true,
          sale: state.total - state.total * 0.75,
        };
      } else {
        return { ...state };
      }
    case WRITE_CART_VALUE:
      return { ...state, valueBonus: payload };
    default:
      return state;
  }
};
