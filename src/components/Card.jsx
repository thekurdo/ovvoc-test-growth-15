import React from 'react';
import PropTypes from 'prop-types';

function Card({ title, subtitle, children, elevated, onClick }) {
  const className = `card ${elevated ? 'card-elevated' : ''}`;

  return (
    <div className={className} onClick={onClick}>
      <div className="card-header">
        <h3>{title}</h3>
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

Card.defaultProps = {
  elevated: false,
  subtitle: null,
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  elevated: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Card;
