import React from 'react';
import './Input.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropTypes } from 'prop-types';

function Input({ icon, size, type, id, text, placeholder }) {
  return (
    <>
      <div className={`input-container ${size ? 'input-container--small' : ''}`}>
        <label htmlFor={id}>{text}</label>
        <div className='input-container__wrapper'>
          <div className='input-container__wrapper__icon'>
            <FontAwesomeIcon icon={icon} />
          </div>
          <input
            className='input-container__wrapper__text'
            id={id}
            type={type}
            placeholder={placeholder}
          />
        </div>
      </div>
    </>
  );
}

Input.propTypes = {
  icon: PropTypes.arrayOf(PropTypes.string),
  size: PropTypes.string,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string.isRequired
};

Input.defaultProps = {
  icon: null,
  size: '',
  text: ''
};

export default Input;
