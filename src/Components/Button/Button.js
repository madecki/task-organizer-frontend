import React from 'react';
import './Button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropTypes } from 'prop-types';

function Button({ label, color, icon, uniqueBtn, imgIcon, callBackFn, type, selectedButton }) {
  let btnColorClass;
  let btnUniqueClass;

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

  switch (uniqueBtn) {
    case 'hover':
      btnUniqueClass = 'btn--hover';
      break;
    case 'type-of-use':
      btnUniqueClass = 'btn--type-of-use';
      break;
    default:
      btnUniqueClass = '';
  }

  return (
    <button
      className={`btn ${btnColorClass} ${btnUniqueClass} ${selectedButton}`}
      type={type ? 'submit' : 'button'}
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
  uniqueBtn: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  imgIcon: PropTypes.string,
  callBackFn: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  type: PropTypes.string,
  selectedButton: PropTypes.string
};

Button.defaultProps = {
  label: '',
  color: '',
  uniqueBtn: '',
  icon: null,
  imgIcon: null,
  callBackFn: null,
  type: '',
  selectedButton: ''
};

export default Button;
