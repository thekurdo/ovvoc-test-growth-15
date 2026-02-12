import React from 'react';
import PropTypes from 'prop-types';

function Button({ variant, size, disabled, children, onClick }) {
  const className = `btn btn-${variant} btn-${size}`;
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  disabled: false,
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
