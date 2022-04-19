import { ADD_CART_ITEM, DEL_CART_ITEM } from "../actionTypes";

const initialState = {
  cart: [],
};

export const cartItems = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CART_ITEM:
      return { cart: [...state.cart, payload] };
    case DEL_CART_ITEM:
      console.log(payload, "payloadpayloadpayload");
	  if(state.cart.length==1){
		  return initialState
	  }
	  const newState = {cart: [...state.cart.slice(0, payload), ...state.cart.slice(payload,-1)]}
	  console.log(newState)
      return newState;
      return { cart: payload };
    default:
      return state;
  }
};
