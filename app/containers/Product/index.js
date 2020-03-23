import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import ProductForm from './ProductForm';
import ProductReview from './ProductReview';

class ProductNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <ProductReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }
    return (
      <ProductForm
        onProductSubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({ form: 'productForm' })(ProductNew);
