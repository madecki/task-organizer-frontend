import React, { useState } from 'react';
import './Radio.css';
import { PropTypes } from 'prop-types';

function Radio({ text, id, hooksprop, name }) {
  const [selectedRadio, setRadioState] = useState('');

  return (
    <>
      <label className='container-label-round' htmlFor={id}>
        {text}
        <input
          type='radio'
          name={name}
          id={id}
          ref={hooksprop}
          value={text}
          checked={selectedRadio === id}
          onChange={() => setRadioState(id)}
        />
        <span className='checkmark-round' />
      </label>
    </>
  );
}

Radio.propTypes = {
  text: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.string]).isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  hooksprop: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

Radio.defaultProps = {
  hooksprop: null
};

export default Radio;
