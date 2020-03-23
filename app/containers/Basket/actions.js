import axios from 'axios';
import { ADD_PRODUCT, REMOVE_PRODUCT, CLEAR_BASKET } from './constants';

export const addProduct = (id, price) => async dispatch => {
  const res = await axios.get(`/api/product/${id}`);

  dispatch({ type: ADD_PRODUCT, payload: { data: res.data, price } });
};

export const removeProduct = id => dispatch => {
  dispatch({ type: REMOVE_PRODUCT, payload: id });
};

export const clearBasket = () => dispatch => {
  dispatch({ type: CLEAR_BASKET, payload: {} });
};
