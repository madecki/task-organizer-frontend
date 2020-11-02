import React, { useState } from 'react';
import './Checkbox.css';
import { PropTypes } from 'prop-types';
import Input from '../Input/Input';

function Checkbox({ text, id, category, type, hooksprop, checked }) {
  const [checkboxValue, setCheckboxValue] = useState('');
  let labelClass;
  let spanClass;

  switch (category) {
    case 'round':
      labelClass = 'container-label-round';
      spanClass = 'checkmark-round';
      break;
    default:
      labelClass = 'container-label-square';
      spanClass = 'checkmark-square';
  }

  const handleChange = event => {
    const checkId = event.target.id;
    setCheckboxValue(checkId);
  };

  return (
    <>
      <label className={labelClass} htmlFor={id}>
        {text}
        <input
          type={type}
          name={type}
          id={id}
          ref={hooksprop}
          value={checkboxValue}
          onChange={event => handleChange(event)}
          checked={checkboxValue}
        />
        <span className={spanClass} />
      </label>
      {id === 'other-profession' && checkboxValue === 'other-profession' && (
        <Input type='text' id='typeOfProfession' placeholder='Work' hooksprop={hooksprop} />
      )}
    </>
  );
}

Checkbox.propTypes = {
  text: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.string]).isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string,
  type: PropTypes.string.isRequired,
  hooksprop: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  checked: PropTypes.bool
};

Checkbox.defaultProps = {
  category: '',
  hooksprop: null,
  checked: false
};

export default Checkbox;
