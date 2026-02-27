import React from 'react';
// PropTypes removed - use TypeScript for type checking

function Button({ variant = 'primary', size = 'medium', disabled = false, children, onClick }) {
  const className = `btn btn-${variant} btn-${size}`;
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;