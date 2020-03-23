import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import formFields from './formFields';
import { submitProduct } from './actions';

const ProductReview = ({ onCancel, formValues, history, submitProduct }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => (
    <div key={name}>
      <label>{label}</label>
      <div>{formValues[name]}</div>
    </div>
  ));

  return (
    <div>
      <h5>Here is your review</h5>
      {reviewFields}
      <button
        type="button"
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        type="submit"
        onClick={() => submitProduct(formValues, history)}
        className="green btn-flat white-text right"
      >
        add product
        <i className="material-icons right">add</i>
      </button>
    </div>
  );
};

ProductReview.propTypes = {
  onCancel: PropTypes.func,
  formValues: PropTypes.object,
  submitProduct: PropTypes.func,
  history: PropTypes.any,
};

function mapStateToProps(state) {
  return { formValues: state.form.productForm.values };
}

export default connect(
  mapStateToProps,
  { submitProduct },
)(withRouter(ProductReview));
