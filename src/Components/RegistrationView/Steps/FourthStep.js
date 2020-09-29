import React from 'react';
import { PropTypes } from 'prop-types';
import { useForm } from 'react-hook-form';
import Stepper from '../Stepper/Stepper';
import Button from '../../Button/Button';
import ProfessionsList from '../ProfessionsList/ProfessionsList';

function FourthStep({ currentStep, onSubmit, callBackFn }) {
  const { handleSubmit } = useForm({ reValidateMode: 'onSubmit' });

  return (
    <>
      <Stepper currentStep={currentStep} />
      <h2>What is your profession?</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ProfessionsList />
        <div className='registration__wrapper registration__wrapper--btn'>
          <Button label='PREV' callBackFn={callBackFn} />
          <Button color='turquoise' label='FINISH' typeBtn='submit' />
        </div>
      </form>
    </>
  );
}

FourthStep.propTypes = {
  currentStep: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
  callBackFn: PropTypes.func.isRequired
};

export default FourthStep;
