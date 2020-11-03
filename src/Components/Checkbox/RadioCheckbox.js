import React, { useState } from 'react';
import './Checkbox.css';
import { PropTypes } from 'prop-types';

function RadioCheckbox({ text, id, type, hooksprop, checked }) {
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
    </>
  );
}

RadioCheckbox.propTypes = {
  text: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.string]).isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  hooksprop: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  checked: PropTypes.bool
};

RadioCheckbox.defaultProps = {
  hooksprop: null,
  checked: false
};

export default RadioCheckbox;
