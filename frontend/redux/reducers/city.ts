import { MAIN_CITY } from "../actionTypes";

const initialState = {
  mainCity: "moskov",
  city: ["Москва", "Санкт-Петербург", "Омск"],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case MAIN_CITY:
      return {
        ...state,
        mainCity: payload
      }
    default:
      return state;
  }
};
