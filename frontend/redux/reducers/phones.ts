import { FETCH_PHONES_SUCCESS } from "../actionTypes";
import * as R from "ramda";

const initialState = {
	foo:'bar'
};

export const phones = (state = initialState, { type, payload }:any) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      return {
        res: "yes!",
      };
    default:
      return state;
  }
};
