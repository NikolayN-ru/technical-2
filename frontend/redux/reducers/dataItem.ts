import { DATA_ITEM } from "../actionTypes";
import { actionProps } from "./interface";

const initialState = {
  data: [],
};

export const cartItems = (state = initialState, { type, payload }:actionProps) => {
  switch (type) {
    case DATA_ITEM:
      return state;
    default:
      return state;
  }
};
