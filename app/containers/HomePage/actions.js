/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import axios from 'axios';
import {
  CHANGE_USERNAME,
  ITEM_COUNT,
  FETCH_LATEST_PRODUCTS_START,
  FETCH_LATEST_PRODUCTS_FAILURE,
  FETCH_LATEST_PRODUCTS_COMPLETE,
} from './constants';
/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function changeUsername(username) {
  return {
    type: CHANGE_USERNAME,
    username,
  };
}
export const getItemCount = () => async dispatch => {
  const res = await axios.get('/api/itemcount');

  dispatch({ type: ITEM_COUNT, payload: res.data.itemCount });
};

export const getLatestProducts = () => async dispatch => {
  dispatch({ type: FETCH_LATEST_PRODUCTS_START });
  try {
    const res = await axios.get('/api/products/latest');
    dispatch({ type: FETCH_LATEST_PRODUCTS_COMPLETE, payload: res.data });
  } catch (e) {
    dispatch({ type: FETCH_LATEST_PRODUCTS_FAILURE, payload: e });
  }
};
