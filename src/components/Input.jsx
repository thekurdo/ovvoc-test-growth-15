import React, { forwardRef } from 'react';
// PropTypes removed - use TypeScript for type checking

const Input = forwardRef(function Input({ label, type = 'text', placeholder = '', error = null, onChange }, ref) {
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

export default Input;