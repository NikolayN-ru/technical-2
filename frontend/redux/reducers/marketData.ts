const initialState = {
  data: [
    { id: 1001, title: "iphone", color: "", price: 12000 },
    { id: 1002, title: "Redmi", color: "", price: 6400 },
    { id: 1003, title: "Xiaomi", color: "", price: 8700 },
  ],
};

export const marketData = (state = initialState, { type, payload}) => {
	switch (type) {
		default:
			return state; 
	}
}