/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import moment from 'moment';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;
const selectProduct = state => state.products || initialState;

const makeSelectItemCount = () =>
  createSelector(
    selectHome,
    homeState => homeState.itemCount,
  );

const makeSelectLatestProducts = () =>
  createSelector(
    selectHome,
    homeState => homeState.latestProducts,
  );

const makeSelectLatestProductAddDate = () =>
  createSelector(
    makeSelectIsLoadingLatestProducts(),
    products => {
      const lastDate = _.chain(products)
        .map(product => moment(new Date(product.createdAt)))
        .sort()
        .head()
        .value();

      return lastDate ? lastDate.fromNom() : 'No products added';
    },
  );

const makeSelectIsLoadingLatestProducts = () =>
  createSelector(
    selectHome,
    homeState => homeState.isLoadingLatestProducts,
  );

const makeSelectProductCount = () =>
  createSelector(
    selectProduct,
    productState => productState.count,
  );

export {
  selectHome,
  makeSelectItemCount,
  makeSelectLatestProducts,
  makeSelectLatestProductAddDate,
  makeSelectProductCount,
  makeSelectIsLoadingLatestProducts,
};
