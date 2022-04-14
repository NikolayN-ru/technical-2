import { MAIN_CITY } from "../actionTypes";

interface cityStateProps {
  mainCity: string;
  city: string[];
}

const initialState:cityStateProps = {
  mainCity: "moskov",
  city: ["Москва", "Санкт-Петербург", "Омск"],
};

interface cityProps {
  type: string,
  payload: any
}

export const city =  (state = initialState, { type, payload }:cityProps) => {
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
