import React from 'react';
import { PropTypes } from 'prop-types';
import './Checkbox.css';

function Checkbox({ label, id, name, hooksprop }) {
  return (
    <label className='container-label-square' htmlFor={id}>
      {label}
      <input type='checkbox' name={name} id={id} ref={hooksprop} />
      <span className='checkmark-square' />
    </label>
  );
}

Checkbox.propTypes = {
  label: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.string]).isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  hooksprop: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

Checkbox.defaultProps = {
  hooksprop: null
};

export default Checkbox;
