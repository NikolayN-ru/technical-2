import { FAVORITES_ADD, FAVORITES_DEL } from "../actionTypes";

const initialState = {
  favor: [],
};

export const favoritesData = (state = initialState, { type, payload }) => {
  switch (type) {
    case FAVORITES_ADD:
      return { favor: [...state.favor, payload] };
    case FAVORITES_DEL:
      const newState = [
        ...state.favor.slice(0, payload),
        ...state.favor.slice(payload, -1),
      ];
      return { favor: newState };
    default:
      return state;
  }
};
