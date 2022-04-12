import { INPUT_QUESTION } from "../actionTypes";

const initialState = { input: "asd" };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INPUT_QUESTION:
      return {
        input: payload,
      };
    default:
      return state;
  }
};
