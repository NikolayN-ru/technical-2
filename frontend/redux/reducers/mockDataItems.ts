import { data as dataPhones } from "mockData/dataPhones";

const initialState = {
	data: dataPhones
};

export const mockDataItems = (state = initialState, { type, payload }: any) => {
  switch (type) {
    default:
      return state;
  }
};

