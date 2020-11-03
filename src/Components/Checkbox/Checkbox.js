import React, { useState } from 'react';
import './Checkbox.css';
import { PropTypes } from 'prop-types';
import Input from '../Input/Input';

function Checkbox({ text, id, type, hooksprop, checked }) {
  const [checkboxValue, setCheckboxValue] = useState(checked);
  const handleChange = event => {
    const checkId = event.target.id;
    setCheckboxValue(checkId);
  };

  return (
    <>
      <label className='container-label-square' htmlFor={id}>
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
        <span className='checkmark-square' />
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
  type: PropTypes.string.isRequired,
  hooksprop: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  checked: PropTypes.bool
};

Checkbox.defaultProps = {
  hooksprop: null,
  checked: false
};

export default Checkbox;
