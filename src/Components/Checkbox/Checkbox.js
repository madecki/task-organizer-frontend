import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import './Checkbox.css';

function Checkbox({ label, id, name, hooksprop, isChecked, onChange }) {
  const [checked, changeChecboxState] = useState(isChecked);

  const toggleCheckbox = () => {
    changeChecboxState(!checked);
    onChange();
  };

  return (
    <label className='container-label-square' htmlFor={id}>
      {label}
      <input
        type='checkbox'
        name={name}
        id={id}
        ref={hooksprop}
        checked={checked}
        onChange={toggleCheckbox}
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
  isChecked: PropTypes.bool,
  onChange: PropTypes.func
};

Checkbox.defaultProps = {
  hooksprop: null,
  isChecked: false,
  onChange: () => {}
};

export default Checkbox;
