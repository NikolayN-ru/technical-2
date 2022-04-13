import { BREAD_CAMPS_REPLASE } from "../actionTypes";

const initialState = {
  camps: ["главная страница", "категории", "телефоны и аксесуары", "смартфоны"],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case BREAD_CAMPS_REPLASE:
      return {
        camps: [state.camps[0], ...payload],
      };
    default:
      return state;
  }
};
