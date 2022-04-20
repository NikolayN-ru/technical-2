import { BREAD_CAMPS_REPLASE } from "../actionTypes";
import { actionProps } from "./interface";

interface breadCampsStateProps {
  camps: string[];
}

const initialState: breadCampsStateProps = {
  camps: ["главная страница", "категории", "телефоны и аксесуары", "смартфоны"],
};

export const breadCamps = (
  state = initialState,
  { type, payload }: actionProps
) => {
  switch (type) {
    case BREAD_CAMPS_REPLASE:
      return {
        camps: [state.camps[0], ...payload],
      };
    default:
      return state;
  }
};
