import { MESSAGE_WRITE } from "../actionTypes";


const initialState = {
  mes: "",
};

export const messageData = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case MESSAGE_WRITE:
      return {mes:payload};
    default:
      return state;
  }
};
