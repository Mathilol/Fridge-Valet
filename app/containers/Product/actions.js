import axios from 'axios';
import {
  PRODUCT_COUNT,
  FETCH_PRODUCTS,
  SEARCH_QUERY,
  SORTING,
  FETCH_SHOWN_PRODUCTS_COMPLETE,
  MORE_PRODUCTS,
  SHOWN_PRODUCTS_COUNT,
  FETCH_SHOWN_PRODUCTS_FAILURE,
  FETCH_SHOWN_PRODUCTS_START,
} from './constants';

export const submitProduct = (values, history) => async dispatch => {
  const res = await axios.post('/api/addProduct', values);
  // need to add a product page and change this push
  history.push('/');
  dispatch({ type: PRODUCT_COUNT, count: res.count });
};

export const fetchProducts = () => async dispatch => {
  const res = await axios.get('/api/products');
  dispatch({ type: FETCH_PRODUCTS, payload: res.data });
};

export const onSearchQueryChange = query => dispatch => {
  dispatch({ type: SEARCH_QUERY, payload: query });
};

export const onProductListSorting = selectedOption => dispatch => {
  const sorting = {
    field: selectedOption.value.field,
    direction: selectedOption.value.direction,
    label: selectedOption.label,
    id: selectedOption.value.id,
  };
  dispatch({ type: SORTING, payload: sorting });
};

export const fetchShownProducts = () => async (dispatch, getState) => {
  dispatch({ type: FETCH_SHOWN_PRODUCTS_START });
  try {
    const values = await getState().products;
    const shownProducts = await axios.get(
      `/api/products/shownproducts?length=${0}&searchQuery=${
        values.searchQuery
      }&sortingfield=${values.sorting.field}&sortingdirection=${
        values.sorting.direction
      }`,
    );
    dispatch({
      type: FETCH_SHOWN_PRODUCTS_COMPLETE,
      payload: shownProducts.data,
    });
  } catch (e) {
    dispatch({ type: FETCH_SHOWN_PRODUCTS_FAILURE, payload: e });
  }
};

export const fetchRemainingProducts = () => async (dispatch, getState) => {
  const values = await getState().products;
  const shownProducts = await axios.get(
    `/api/products/shownproducts?length=${
      values.shownProducts.length
    }&searchQuery=${values.searchQuery}&sortingfield=${
      values.sorting.field
    }&sortingdirection=${values.sorting.direction}`,
  );
  dispatch({ type: MORE_PRODUCTS, payload: shownProducts.data });
};

export const onReachProductListEndItemCount = () => (dispatch, getState) => {
  const { itemCount } = getState().products;
  const newItemCount = itemCount + 10;
  dispatch({ type: SHOWN_PRODUCTS_COUNT, count: newItemCount });
};

export const fetchProductCount = () => async dispatch => {
  const productCount = await axios.get('/api/productcount');
  console.log(`product count:${productCount.data.count}`);

  dispatch({ type: PRODUCT_COUNT, payload: productCount.data.count });
};
