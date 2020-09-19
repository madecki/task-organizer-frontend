import React from 'react';
import './Button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropTypes } from 'prop-types';

function Button({ label, color, icon, size, imgIcon, func }) {
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

  let btnSizeClass;

  switch (size) {
    case 'extra-large':
      btnSizeClass = 'btn--extra-large';
      break;
    case 'small':
      btnSizeClass = 'btn--small-padding';
      break;
    default:
      btnSizeClass = 'btn';
  }

  return (
    <button className={`btn ${btnColorClass} ${btnSizeClass} `} type='button' onClick={func}>
      {icon ? <FontAwesomeIcon icon={icon} /> : null}
      {imgIcon ? <img src={imgIcon} alt={`${imgIcon} logo`} /> : null}
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.arrayOf(PropTypes.string),
  imgIcon: PropTypes.string,
  func: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

Button.defaultProps = {
  label: '',
  color: '',
  size: '',
  icon: null,
  imgIcon: null,
  func: null
};

export default Button;
