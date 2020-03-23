import React, { Component } from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import _ from 'lodash';
import PropTypes from 'prop-types';
import TabBar from './TabBar';
import ShopsTable from './ShopsTable';

export default class ProductInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { product: {}, renderIndex: 0 };
  }

  async componentDidMount() {
    const url = `/api/product/${this.props.match.params.id}`;
    const { data } = await axios.get(url);
    this.setState({ product: data });
  }

  createData = (shopName, price, distance) => ({ shopName, price, distance });

  handleChange = newValue => {
    this.setState({ renderIndex: newValue });
  };

  renderContent = rows => {
    switch (this.state.renderIndex) {
      case 0:
        return <ShopsTable rows={rows} />;

      case 1:
        return <div> product details</div>;

      case 2:
        return <div> something</div>;

      default:
        return <div>Default</div>;
    }
  };

  render() {
    const { product } = this.state;
    const rows = _.map(product.prices, shop =>
      this.createData(shop.shopId, shop.price, 24),
    );

    return (
      <div>
        <Paper style={{ margin: '10%' }}>
          <img src={product.images[0].src_small} />
        </Paper>
        <Paper>
          <TabBar handleContent={this.handleChange} />
          {this.renderContent(rows)}
        </Paper>
      </div>
    );
  }
}

ProductInfo.propTypes = {
  match: PropTypes.object,
};
