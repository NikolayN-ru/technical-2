import { marketDataItems } from "mockData/marketData";

const initialState = marketDataItems

export const marketData = (state = initialState, { type, payload}: any) => {
	switch (type) {
		default:
			return state; 
	}
}
