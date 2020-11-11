import React from 'react';
import { PropTypes } from 'prop-types';
import './Checkbox.css';

function Checkbox({ label, id, name, hooksprop, isChecked, onChange }) {
  return (
    <label className='container-label-square' htmlFor={id}>
      {label}
      <input
        type='checkbox'
        name={name}
        id={id}
        ref={hooksprop}
        checked={isChecked}
        onChange={() => onChange(isChecked)}
      />
      <span className='checkmark-square' />
    </label>
  );
}

Checkbox.propTypes = {
  label: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.string]).isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  hooksprop: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func
};

Checkbox.defaultProps = {
  hooksprop: null,
  onChange: () => {}
};

export default Checkbox;
