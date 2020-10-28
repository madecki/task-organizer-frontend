import React from 'react';
import './Button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropTypes } from 'prop-types';

function Button({ label, color, icon, size, imgIcon, callBackFn, typeBtn, selectedButton }) {
  let btnColorClass;
  let btnSizeClass;

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
      btnColorClass = '';
  }

  switch (size) {
    case 'hover':
      btnSizeClass = 'btn--hover';
      break;
    case 'large':
      btnSizeClass = 'btn--type-of-use';
      break;
    default:
      btnSizeClass = '';
  }

  return (
    <button
      className={`btn ${btnColorClass} ${btnSizeClass} ${selectedButton}`}
      type={typeBtn ? 'submit' : 'button'}
      onClick={callBackFn}>
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
  callBackFn: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  typeBtn: PropTypes.string,
  selectedButton: PropTypes.string
};

Button.defaultProps = {
  label: '',
  color: '',
  size: '',
  icon: null,
  imgIcon: null,
  callBackFn: null,
  typeBtn: '',
  selectedButton: ''
};

export default Button;
