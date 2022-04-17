import { MAIN_CITY } from "../actionTypes";

interface cityStateProps {
  mainCity: string;
  city: string[];
}

const initialState: cityStateProps = {
  mainCity: "moskov",
  city: [
    "Москва",
    "Санкт-Петербург",
    "Омск",
    "Абакан",
    "Азов",
    "Александров",
    "Алексин",
    "Альметьевск",
    "Анапа",
    "Ангарск",
    "Апатиты",
    "Арзамас",
    "Армавир",
    "Арсеньев",
    "Артем",
    "Архангельск",
    "Асбест",
    "Астрахань",
    "Ачинск",
    "Балаково",
    "Балахна",
    "Балашиха",
    "Балашов",
    "Барнаул",
  ],
};

interface cityProps {
  type: string;
  payload: any;
}

export const city = (state = initialState, { type, payload }: cityProps) => {
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
