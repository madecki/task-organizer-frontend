import React from 'react';
import './Checkbox.css';
import { PropTypes } from 'prop-types';

function Checkbox({ text, id, category, type }) {
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

  return (
    <>
      <label className={labelClass} htmlFor={id}>
        {text}
        <input type={type} name={type} id={id} />
        <span className={spanClass} />
      </label>
    </>
  );
}

Checkbox.propTypes = {
  text: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.string]).isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string,
  type: PropTypes.string.isRequired
};

Checkbox.defaultProps = {
  category: ''
};

export default Checkbox;
