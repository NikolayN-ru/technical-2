import { data as dataPhones } from "mockData/dataPhones";

const initialState = {
	data: dataPhones
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

