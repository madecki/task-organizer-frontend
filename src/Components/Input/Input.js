import React from 'react';
import './Input.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropTypes } from 'prop-types';

function Input({ icon, type, id, text, placeholder, name, hooksprop, autocomplete }) {
  return (
    <>
      <label className='input__label' htmlFor={id}>
        {text}
      </label>
      <div className='input__wrapper'>
        <div className='input__icon'>{icon ? <FontAwesomeIcon icon={icon} /> : null}</div>
        <input
          className='input'
          id={id}
          type={type}
          name={name || id}
          placeholder={placeholder}
          ref={hooksprop}
          autoComplete={autocomplete}
        />
      </div>
    </>
  );
}

Input.propTypes = {
  icon: PropTypes.arrayOf(PropTypes.string),
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string,
  hooksprop: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  autocomplete: PropTypes.bool
};

Input.defaultProps = {
  icon: null,
  text: '',
  name: '',
  hooksprop: null,
  autocomplete: ''
};

export default Input;
