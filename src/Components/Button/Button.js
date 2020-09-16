import React from 'react';
import './Button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropTypes } from 'prop-types';

function Button({ label, color, icon, size }) {
  let btnColorClass;

  switch (color) {
    case 'turquoise':
      btnColorClass = 'btn--sign-in';
      break;
    case 'blue':
      btnColorClass = 'btn--fb';
      break;
    case 'white':
      btnColorClass = 'btn--google';
      break;
    default:
      btnColorClass = 'btn--default';
  }

  return (
    <button
      className={`btn ${btnColorClass} ${icon ? 'btn--large' : ''} ${
        size ? 'btn--free-sign-up' : ' '
      }`}
      type='button'>
      {icon ? <FontAwesomeIcon icon={icon} /> : null} {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.arrayOf(PropTypes.string)
};

Button.defaultProps = {
  color: '',
  size: '',
  icon: null
};

export default Button;
