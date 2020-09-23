import React from 'react';
import './Checkbox.css';
import { PropTypes } from 'prop-types';

function Checkbox({ text, id, type }) {
  let labelClass;
  let spanClass;

  switch (type) {
    case 'round':
      labelClass = 'container-label-round';
      spanClass = 'checkmark-round';
      break;
    default:
      labelClass = 'container-label-square';
      spanClass = 'checkmark-square';
  }

  return (
    <>
      <label className={labelClass} htmlFor={id}>
        {text}
        <input type='checkbox' id={id} />
        <span className={spanClass} />
      </label>
    </>
  );
}

Checkbox.propTypes = {
  text: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.string]).isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string
};

Checkbox.defaultProps = {
  type: ''
};

export default Checkbox;
