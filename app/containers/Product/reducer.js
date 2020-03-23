import produce from 'immer';
import {
  PRODUCT_COUNT,
  FETCH_PRODUCTS,
  SEARCH_QUERY,
  SORTING,
  FETCH_SHOWN_PRODUCTS_START,
  MORE_PRODUCTS,
  SHOWN_PRODUCTS_COUNT,
  FETCH_SHOWN_PRODUCTS_FAILURE,
  FETCH_SHOWN_PRODUCTS_COMPLETE,
} from './constants';

export const initialState = {
  count: 0,
  products: [],
  searchQuery: '',
  sorting: { field: 'name.en', direction: 'asc', label: 'A-Z', id: 0 },
  itemCount: 10,
  shownProducts: [],
  shownProductsError: '',
  isLoadingShownProducts: true,
};

/* eslint-disable default-case, no-param-reassign */
const productReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case PRODUCT_COUNT:
        draft.count = action.payload;
        break;
      case FETCH_PRODUCTS:
        draft.products = action.payload;
        break;
      case SEARCH_QUERY:
        draft.shownProducts = [];
        draft.searchQuery = action.payload;
        break;
      case SORTING:
        draft.shownProducts = [];
        draft.sorting = action.payload;
        break;
      case FETCH_SHOWN_PRODUCTS_COMPLETE:
        draft.shownProducts = action.payload;
        draft.isLoadingShownProducts = false;
        break;
      case FETCH_SHOWN_PRODUCTS_FAILURE:
        draft.shownProductsError = action.payload;
        draft.isLoadingShownProducts = false;
        break;
      case FETCH_SHOWN_PRODUCTS_START:
        draft.isLoadingShownProducts = true;
        break;
      case MORE_PRODUCTS:
        draft.shownProducts = draft.shownProducts.concat(action.payload);
        break;
      case SHOWN_PRODUCTS_COUNT:
        draft.itemCount = action.count;
        break;
    }
  });

export default productReducer;
