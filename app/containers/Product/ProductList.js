import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { Paper, TextField } from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import LoadingIndicator from 'components/LoadingIndicator';
import ProductCard from './ProductCard';
import {
  makeSelectShownProducts,
  makeSelectSorting,
  makeSelectIsLoadingShownProducts,
} from './selectors';
import {
  fetchRemainingProducts,
  fetchShownProducts,
  onSearchQueryChange,
  onProductListSorting,
  onReachProductListEndItemCount,
} from './actions';

const options = [
  { value: { field: 'name.en', direction: 'asc', id: 0 }, label: 'A-Z' },
  { value: { field: 'name.en', direction: 'desc', id: 1 }, label: 'Z-A' },
];

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasMore: true,
    };
  }

  componentDidMount() {
    this.props.fetchShownProducts();
  }

  renderContent = () => {
    if (this.props.isLoadingShownProducts) {
      return <LoadingIndicator />;
    }
    return (
      <InfiniteScroll
        dataLength={this.props.shownProducts.length}
        next={this.fetchMoreProducts}
        hasMore
        loader={<LoadingIndicator />}
      >
        {this.props.shownProducts.map(product => (
          <ProductCard key={product.barCode} product={product} />
        ))}
      </InfiniteScroll>
    );
  };

  fetchMoreProducts = () => {
    this.props.onReachProductListEndItemCount();
    this.props.fetchRemainingProducts();
  };

  render() {
    return (
      <div>
        THIS IS THE LIST AND SORTING
        <Select
          value={options[this.props.sorting.id]}
          isSearchable={false}
          hideSelectedOptions
          onChange={this.props.onProductListSorting}
          options={options}
        />
        <TextField
          id="outlined-search-input"
          label="Search"
          onChange={this.props.onSearchQueryChange}
          type="search"
          name="search"
          autoComplete="search"
          margin="normal"
          variant="outlined"
        />
        <div>{this.renderContent()}</div>
      </div>
    );
  }
}

ProductList.propTypes = {
  product: PropTypes.object,
  fetchProducts: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  shownProducts: makeSelectShownProducts(),
  sorting: makeSelectSorting(),
  isLoadingShownProducts: makeSelectIsLoadingShownProducts(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onSearchQueryChange: evt => {
      dispatch(onSearchQueryChange(evt.target.value));
      dispatch(fetchShownProducts());
    },
    onProductListSorting: selectedOption => {
      dispatch(onProductListSorting(selectedOption));
      dispatch(fetchShownProducts());
    },
    fetchShownProducts: () => dispatch(fetchShownProducts()),
    fetchRemainingProducts: () => dispatch(fetchRemainingProducts()),
    onReachProductListEndItemCount: () =>
      dispatch(onReachProductListEndItemCount()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductList);
