import { FETCH_ITEM } from "redux/actionTypes";

const initialState = {
	data: {}
}

interface propsItem {
	type: string;
	payload: any;
}

export const itemData = (state = initialState, { type, payload }:propsItem) => {
	switch (type) {
		case FETCH_ITEM:
			return {
				data: payload
			}
		default:
			return state;
	}
}
