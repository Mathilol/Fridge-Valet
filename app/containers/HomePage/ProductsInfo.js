import React, { Component, memo, useEffect, useState } from 'react';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { makeStyles, Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import LoadingIndicator from 'components/LoadingIndicator';
import { fetchProductCount } from '../Product/actions';
import {
  makeSelectIsLoadingLatestProducts,
  makeSelectLatestProductAddDate,
  makeSelectLatestProducts,
  makeSelectProductCount,
} from './selectors';
import { getLatestProducts } from './actions';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2, 1),
  },
}));

const ProductsInfo = ({
  fetchProductCount,
  fetchLatestProducts,
  isLoadingLatestProducts,
  latestProductDate,
  productCount,
}) => {
  const classes = useStyles();
  useEffect(() => {
    fetchProductCount();
    fetchLatestProducts();
  }, []);

  {
    return (
      <Grid container>
        {isLoadingLatestProducts ? (
          <LoadingIndicator />
        ) : (
          <Grid item>
            <Typography variant="h5"> Products Info </Typography>
            <Paper className={classes.paper}>
              <Typography> Number of products: {productCount} </Typography>
              <Typography> Last product added: {latestProductDate}</Typography>
            </Paper>
          </Grid>
        )}
      </Grid>
    );
  }
};

ProductsInfo.propTypes = {
  fetchProductCount: PropTypes.func.isRequired,
  productCount: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  productCount: makeSelectProductCount(),
  latestProducts: makeSelectLatestProducts(),
  latestProductDate: makeSelectLatestProductAddDate(),
  isLoadingLatestProducts: makeSelectIsLoadingLatestProducts(),
});

export function mapDispatchToProps(dispatch) {
  return {
    fetchProductCount: () => dispatch(fetchProductCount()),
    fetchLatestProducts: () => dispatch(getLatestProducts()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ProductsInfo);
