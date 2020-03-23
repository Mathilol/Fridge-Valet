/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectLoading, makeSelectError } from 'containers/App/selectors';

import { fetchProducts } from '../Product/actions';
import ProductsInfo from './ProductsInfo';
import LatestProducts from './LatestProducts';
import reducer from './reducer';

const key = 'home';

export function HomePage() {
  useInjectReducer({ key, reducer });

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="FridgeValet" />
      </Helmet>
      <div>
        <ProductsInfo />

        <LatestProducts />
      </div>
    </article>
  );
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

// TODO FIX THIS : NO ITEM COUNT AND FETCHPRODUCTS
export function mapDispatchToProps() {
  return {
    fetchProduct: fetchProducts(),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
