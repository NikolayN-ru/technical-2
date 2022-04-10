import { FETCH_PHONES_SUCCESS } from "../actionTypes";

export const fetchPhones = () => async (dispatch) => {
  dispatch({
    type: FETCH_PHONES_SUCCESS,
  });
};
