import {BREAD_CAMPS_REPLASE} from '../actionTypes';

const initialState = {
  camps:['главная страница', 'категории', 'телефоны и аксесуары', 'смартфоны']
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case BREAD_CAMPS_REPLASE:
      return {
        camps: [state.camps[0], ...payload],
      };
    default:
      return state;
  }
};
