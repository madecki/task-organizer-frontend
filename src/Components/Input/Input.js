import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropTypes } from 'prop-types';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './Input.css';

function Input({ icon, type, id, text, placeholder, name, hooksprop, autocomplete, value }) {
  const [inputValue, setInputValue] = useState(value);
  const [isVisible, setVisibility] = useState(false);

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
        {type === 'password' ? (
          <>
            <input
              className={icon ? 'input' : 'input input__full'}
              id={id}
              type={isVisible ? 'text' : 'password'}
              name={name || id}
              placeholder={placeholder}
              ref={hooksprop}
              autoComplete={autocomplete}
              onChange={event => {
                setInputValue(event.target.value);
              }}
              value={inputValue}
            />
            {isVisible ? (
              <FontAwesomeIcon icon={faEyeSlash} onClick={() => setVisibility(false)} />
            ) : (
              <FontAwesomeIcon icon={faEye} onClick={() => setVisibility(true)} />
            )}
          </>
        ) : (
          <input
            className={icon ? 'input' : 'input input__full'}
            id={id}
            type={type}
            name={name || id}
            placeholder={placeholder}
            ref={hooksprop}
            autoComplete={autocomplete}
            onChange={event => {
              setInputValue(event.target.value);
            }}
            value={inputValue}
          />
        )}
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
