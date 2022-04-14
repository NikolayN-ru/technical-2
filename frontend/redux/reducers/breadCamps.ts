import { BREAD_CAMPS_REPLASE } from "../actionTypes";

interface breadCampsStateProps {
  camps: string[]; 
}

const initialState:breadCampsStateProps = {
  camps: ["главная страница", "категории", "телефоны и аксесуары", "смартфоны"],
};

interface breadCampsProps {
  type: string,
  payload: any
}

export const breadCamps = (state = initialState, { type, payload }:breadCampsProps) => {
  switch (type) {
    case BREAD_CAMPS_REPLASE:
      return {
        camps: [state.camps[0], ...payload],
      };
    default:
      return state;
  }
};
