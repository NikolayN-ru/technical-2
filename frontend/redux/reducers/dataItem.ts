import { DATA_ITEM } from "../actionTypes";

const initialState = {
  data: [],
};

export const cartItems = (state = initialState, { type, payload }) => {
  switch (type) {
    case DATA_ITEM:
      return state;
    default:
      return state;
  }
};
