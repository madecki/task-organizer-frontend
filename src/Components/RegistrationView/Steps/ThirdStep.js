import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import Stepper from '../Stepper/Stepper';
import Button from '../../Button/Button';

function ThirdStep({ currentStep, callBackFn, stepfunc }) {
  const [selectedButton, setSelectedButton] = useState('');
  const selectedType = () => {
    const whichButton = 'btn--selected';
    setSelectedButton(whichButton);
  };
  console.log(selectedButton);
  return (
    <>
      <Stepper currentStep={currentStep} />
      <h2>Tell us a bit about yourself</h2>
      <p className='paragraph-type-of-use'>What will you be using our app for?</p>

      <Button icon={['fas', 'suitcase']} size='large' label='WORK' callBackFn={stepfunc} />

      <Button icon={['fas', 'user']} size='large' label='PERSONAL' callBackFn={stepfunc} />

      <Button
        icon={['fas', 'graduation-cap']}
        size='large'
        label='SCHOOL'
        callBackFn={event => selectedType(event)}
        selectedButton={selectedButton}
      />

      <div className='registration__wrapper registration__wrapper--btn'>
        <Button label='PREV' callBackFn={callBackFn} />
        <Button color='turquoise' label='FINISH' typeBtn='submit' />
      </div>
    </>
  );
}

ThirdStep.propTypes = {
  currentStep: PropTypes.number.isRequired,
  callBackFn: PropTypes.func.isRequired,
  stepfunc: PropTypes.func.isRequired
};

export default ThirdStep;
