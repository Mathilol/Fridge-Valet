/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  ITEM_COUNT,
  FETCH_LATEST_PRODUCTS_COMPLETE,
  FETCH_LATEST_PRODUCTS_START,
  FETCH_LATEST_PRODUCTS_FAILURE,
} from './constants';

// The initial state of the App
export const initialState = {
  username: '',
  itemCount: 5,
  latestProducts: [],
  isLoadingLatestProducts: true,
  latestProductsError: '',
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, { payload, type }) =>
  produce(state, draft => {
    switch (type) {
      case ITEM_COUNT:
        draft.itemCount = payload;
        break;
      case FETCH_LATEST_PRODUCTS_COMPLETE:
        draft.latestProducts = payload;
        draft.isLoadingLatestProducts = false;
        break;
      case FETCH_LATEST_PRODUCTS_START:
        draft.isLoadingLatestProducts = true;
        break;
      case FETCH_LATEST_PRODUCTS_FAILURE:
        draft.latestProductsError = payload;
        draft.isLoadingLatestProducts = false;
        break;
    }
  });

export default homeReducer;
