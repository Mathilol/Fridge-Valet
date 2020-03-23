import React from 'react';
import PropTypes from 'prop-types';

const ProductField = ({ input, label, meta: { error, touched }, type }) => (
  <div>
    <label>{label}</label>
    <input {...input} type={type} style={{ marginBottom: '5px' }} />
    <div className="red-text" style={{ marginBottom: '20px' }}>
      {touched && error}
    </div>
  </div>
);

ProductField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
  type: PropTypes.string,
};

export default ProductField;
