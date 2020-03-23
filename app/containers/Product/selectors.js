import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectProduct = state => state.products || initialState;

const makeSelectShownProducts = () =>
  createSelector(
    selectProduct,
    productState => productState.shownProducts,
  );

const makeSelectSorting = () =>
  createSelector(
    selectProduct,
    productState => productState.sorting,
  );

const makeSelectIsLoadingShownProducts = () =>
  createSelector(
    selectProduct,
    productState => productState.isLoadingShownProducts,
  );
export {
  makeSelectShownProducts,
  makeSelectSorting,
  makeSelectIsLoadingShownProducts,
};
