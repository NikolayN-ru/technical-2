import { MAIN_CITY } from "../actionTypes";
import { actionProps } from "./interface";
import { cityStateData } from "mockData/cityData";
import { cityStateProps } from "mockData/cityData/cityData.interface";

const initialState: cityStateProps = cityStateData;

export const city = (state = initialState, { type, payload }: actionProps) => {
  switch (type) {
    case MAIN_CITY:
      return {
        ...state,
        mainCity: payload,
      };
    default:
      return state;
  }
};
