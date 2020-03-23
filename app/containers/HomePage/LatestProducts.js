import React, { Component, memo } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import _ from 'lodash';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import { makeSelectLatestProducts } from './selectors';

// TODO: MAYBE CHANGE TO NEWEST PRODUCTS
class LatestProducts extends Component {
  renderProducts() {
    const { latestProducts } = this.props;

    return _.map(latestProducts, product => (
      <ProductCard key={product.barCode} product={product} />
    ));
  }

  render() {
    return (
      <div style={{ marginTop: 20, padding: 30 }}>
        <Typography variant="h5"> LATEST PRODUCTS </Typography>
        <Paper style={{ padding: '5%' }}>
          <Grid container spacing={1} justify="center">
            {this.renderProducts()}
          </Grid>
        </Paper>
      </div>
    );
  }
}

LatestProducts.propTypes = {
  latestProducts: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  latestProducts: makeSelectLatestProducts(),
});

export function mapDispatchToProps(dispatch) {
  return {};
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(LatestProducts);
