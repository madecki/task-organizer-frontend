import React from 'react';
import './Input.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropTypes } from 'prop-types';

function Input({ icon, size }) {
  return (
    <div className={`login__input-wrapper ${size ? 'login__input-wrapper--small' : ''}`}>
      <div className='login__input-wrapper__icon'>
        <FontAwesomeIcon icon={icon} />
      </div>
      <input className='login__input-wrapper__text' id='email' type='email' />
    </div>
  );
}

Input.propTypes = {
  icon: PropTypes.arrayOf(PropTypes.string),
  size: PropTypes.string
};

Input.defaultProps = {
  icon: null,
  size: ''
};

export default Input;
