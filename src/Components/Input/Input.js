import React from 'react';
import './Input.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropTypes } from 'prop-types';

function Input({ icon, size, type, id, text, placeholder, sizeWrapperText, name, hooksprop }) {
  return (
    <div className={`input-container ${size ? 'input-container--small' : ''}`}>
      <label className='input-container__label' htmlFor={id}>
        {text}
      </label>
      <div className='input-container__wrapper'>
        <div className='input-container__wrapper__icon'>
          {icon ? <FontAwesomeIcon icon={icon} /> : null}
        </div>
        <input
          className={`input-container__wrapper__text ${
            sizeWrapperText ? 'input-container__wrapper__text--small' : ''
          }`}
          id={id}
          type={type}
          name={name || id}
          placeholder={placeholder}
          ref={hooksprop}
        />
      </div>
    </div>
  );
}

Input.propTypes = {
  icon: PropTypes.arrayOf(PropTypes.string),
  size: PropTypes.string,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  sizeWrapperText: PropTypes.string,
  name: PropTypes.string,
  hooksprop: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

Input.defaultProps = {
  icon: null,
  size: '',
  text: '',
  sizeWrapperText: '',
  name: '',
  hooksprop: null
};

export default Input;
