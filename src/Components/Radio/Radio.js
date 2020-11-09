import React from 'react';
import './Radio.css';
import { PropTypes } from 'prop-types';

function Radio({ label, hooksprop, name, isChecked, onChange }) {
  return (
    <label className='container-label-round' htmlFor={`${name}-${label}`}>
      {label}
      <input
        type='radio'
        name={name}
        id={`${name}-${label}`}
        ref={hooksprop}
        value={label}
        checked={isChecked}
        onChange={() => onChange(label)}
      />
      <span className='checkmark-round' />
    </label>
  );
}

Radio.propTypes = {
  label: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.string]).isRequired,
  hooksprop: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  name: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
};

Radio.defaultProps = {
  hooksprop: null,
  isChecked: false,
  onChange: () => {}
};

export default Radio;
