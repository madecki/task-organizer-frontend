import React from 'react';
import './Stepper.css';
import { PropTypes } from 'prop-types';

function Stepper({ currentStep }) {
  return (
    <div className='stepper-wrapper'>
      <div className='number-of-step first-step'>1</div>
      <div className='line' />
      <div
        className={`number-of-step ${currentStep === 1 ? 'second-step' : ''} ${
          currentStep === 2 || currentStep === 3 ? 'second-step' : ''
        }`}>
        2
      </div>
      <div className='line' />
      <div
        className={`number-of-step ${currentStep === 2 || currentStep === 3 ? 'third-step' : ''}`}>
        3
      </div>
    </div>
  );
}

Stepper.propTypes = {
  currentStep: PropTypes.number
};

Stepper.defaultProps = {
  currentStep: null
};

export default Stepper;
