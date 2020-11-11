import React from 'react';
import { PropTypes } from 'prop-types';
import './Checkbox.css';

function Checkbox({ text, id, name, hooksprop, onChange, checked }) {
  return (
    <label className='container-label-square' htmlFor={id}>
      {text}
      <input
        type='ckeckbox'
        name={name}
        id={id}
        ref={hooksprop}
        // onClick={() => setChecked(!!checked)}
        checked={checked}
        onChange={onChange}
      />
      <span className='checkmark-square' />
    </label>
  );
}

Checkbox.propTypes = {
  text: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.string]).isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  hooksprop: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onChange: PropTypes.func
};

Checkbox.defaultProps = {
  hooksprop: null,
  onChange: () => {}
};

export default Checkbox;
