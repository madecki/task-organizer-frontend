import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropTypes } from 'prop-types';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './Input.css';

function Input({ icon, type, id, text, placeholder, name, hooksprop, autocomplete, value }) {
  const [inputValue, setInputValue] = useState(value);
  const [isVisible, setVisibility] = useState(false);
  const [inputType, changeInputType] = useState('password');

  const showHidePassword = () => {
    setVisibility(!isVisible);
    changeInputType(inputType === 'password' ? 'text' : 'password');
  };

  return (
    <>
      {text ? (
        <label className='input__label' htmlFor={id}>
          {text}
        </label>
      ) : null}
      <div className='input__wrapper'>
        {icon ? (
          <div className='input__icon'>
            <FontAwesomeIcon icon={icon} />
          </div>
        ) : null}
        <>
          <input
            className={icon ? 'input' : 'input input__full'}
            id={id}
            type={type === 'password' ? inputType : type}
            name={name || id}
            placeholder={placeholder}
            ref={hooksprop}
            autoComplete={autocomplete}
            onChange={event => {
              setInputValue(event.target.value);
            }}
            value={inputValue}
          />
          {type === 'password' &&
            (isVisible ? (
              <FontAwesomeIcon icon={faEyeSlash} onClick={() => showHidePassword()} />
            ) : (
              <FontAwesomeIcon icon={faEye} onClick={() => showHidePassword()} />
            ))}
        </>
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
  autocomplete: PropTypes.string,
  value: PropTypes.string
};

Input.defaultProps = {
  icon: null,
  text: '',
  name: '',
  hooksprop: null,
  autocomplete: '',
  value: ''
};

export default Input;
