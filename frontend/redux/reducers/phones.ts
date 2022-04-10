import { FETCH_PHONES_SUCCESS } from "../actionTypes";
import * as R from "ramda";

const initialState = {
	foo:'bar'
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      return {
        res: "yes!",
        // data: payload
      };
    default:
      return state;
  }
};
