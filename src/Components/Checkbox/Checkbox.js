import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import './Checkbox.css';

function Checkbox({ text, id, name, value, hooksprop, onChange }) {
  const [checked, setChecked] = useState(undefined);

  useEffect(() => {
    if (onChange) {
      onChange(checked);
    }
  }, [checked, onChange]);

  return (
    <label className='container-label-square' htmlFor={id}>
      {text}
      <input
        type='ckeckbox'
        name={name}
        id={id}
        ref={hooksprop}
        value={value}
        onClick={() => setChecked(!checked)}
        checked={checked}
        onChange={event => {
          setChecked(event.target.checked);
        }}
      />
      <span className='checkmark-square' />
    </label>
  );
}

Checkbox.propTypes = {
  text: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.string]).isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  hooksprop: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onChange: PropTypes.func
};

Checkbox.defaultProps = {
  hooksprop: null,
  onChange: () => {}
};

export default Checkbox;
