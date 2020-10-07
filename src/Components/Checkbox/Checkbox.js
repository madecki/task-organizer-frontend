import React, { useState } from 'react';
import './Checkbox.css';
import { PropTypes } from 'prop-types';

function Checkbox({ text, id, category, type, hooksprop }) {
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

  const handleCheckboxClick = event => {
    const checkId = event.target.id;
    setCheckboxValue(checkId);
    console.log(checkId);
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
          onChange={event => handleCheckboxClick(event)}
        />
        <span className={spanClass} />
      </label>
    </>
  );
}

Checkbox.propTypes = {
  text: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.string]).isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string,
  type: PropTypes.string.isRequired,
  hooksprop: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

Checkbox.defaultProps = {
  category: '',
  hooksprop: null
};

export default Checkbox;
