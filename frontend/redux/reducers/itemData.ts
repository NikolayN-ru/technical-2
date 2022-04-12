import { FETCH_ITEM } from "redux/actionTypes";

const initialState = {
	data: null
}

interface propsItem {
	type: string;
	payload: any;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }:propsItem) => {
	switch (type) {
		case FETCH_ITEM:
			return {
				data: payload
			}
		default:
			return state;
	}
}
