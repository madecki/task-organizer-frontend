import React from 'react';
import './Checkbox.css';
import { PropTypes } from 'prop-types';

function Checkbox({ text, id }) {
  return (
    <>
      <label className='container-label' htmlFor={id}>
        {text}
        <input type='checkbox' id={id} />
        <span className='checkmark' />
      </label>
    </>
  );
}

Checkbox.propTypes = {
  text: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.string]).isRequired,
  id: PropTypes.string.isRequired
};

export default Checkbox;