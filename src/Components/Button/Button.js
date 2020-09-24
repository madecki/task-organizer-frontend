import React from 'react';
import './Button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropTypes } from 'prop-types';

function Button({ label, color, icon, size, imgIcon, func, typeBtn }) {
  let btnColorClass;

  switch (color) {
    case 'turquoise':
      btnColorClass = 'btn--turquoise';
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
    case 'medium':
      btnSizeClass = 'btn--sign-in';
      break;
    case 'large':
      btnSizeClass = 'btn--type-of-use';
      break;
    default:
      btnSizeClass = 'btn';
  }

  return (
    <button
      className={`btn ${btnColorClass} ${btnSizeClass} `}
      type={typeBtn ? 'submit' : 'button'}
      onClick={func}>
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
  func: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  typeBtn: PropTypes.string
};

Button.defaultProps = {
  label: '',
  color: '',
  size: '',
  icon: null,
  imgIcon: null,
  func: null,
  typeBtn: ''
};

export default Button;
