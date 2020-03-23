import produce from 'immer';
import { ADD_PRODUCT, CLEAR_BASKET, REMOVE_PRODUCT } from './constants';

export const initialState = {
  shopId: '',
  itemCount: 5,
  latestProducts: [],
};

// TODO: implement basket

const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_PRODUCT:
        break;
      case CLEAR_BASKET:
        break;
      case REMOVE_PRODUCT:
        break;
    }
  });

export default homeReducer;
