import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Input = forwardRef(function Input({ label, type, placeholder, error, onChange }, ref) {
  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className={error ? 'input-error' : 'input'}
      />
      {error && <span className="error-text">{error}</span>}
    </div>
  );
});

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  error: null,
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
