import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductField from './ProductField';
import formFields from './formFields';

class ProductForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name, type }) => (
      <Field
        key={name}
        component={ProductField}
        // need to add type to the formFields for different types
        type={type}
        label={label}
        name={name}
      />
    ));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onProductSubmit)}>
          {this.renderFields()}
          <Link to="/" className="red btn-flat white-text  ">
            Cancel
          </Link>
          <button className="teal btn-flat right white-text" type="submit">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

ProductForm.propTypes = {
  handleSubmit: PropTypes.func,
  onProductSubmit: PropTypes.func,
};

function validate(values) {
  const errors = {};

  _.forEach(formFields, ({ name }) => {
    if (!values[name]) {
      // need to add custom errors for every field
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'productForm',
  destroyOnUnmount: false,
})(ProductForm);
