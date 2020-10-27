import React from 'react';
import { PropTypes } from 'prop-types';
import { useForm } from 'react-hook-form';
import Stepper from '../Stepper/Stepper';
import Button from '../../Button/Button';
import Checkbox from '../../Checkbox/Checkbox';

function FourthStep({ currentStep, onSubmit, callBackFn }) {
  const { register, handleSubmit, errors } = useForm({ reValidateMode: 'onSubmit' });

  const professions = [
    'Education',
    'Engineer',
    'Farmer',
    'Health service',
    'Manual worker',
    'Logistic',
    'IT',
    'Office worker',
    'Trade',
    'Transport'
  ];

  return (
    <>
      <Stepper currentStep={currentStep} />
      <h2>What is your profession?</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {professions.map(prof => (
          <Checkbox
            key={prof}
            text={prof}
            id={prof}
            category='round'
            type='radio'
            hooksprop={register({ required: true })}
          />
        ))}
        <div className='checkbox-and-input-wrapper'>
          <Checkbox
            text='Other (which?)'
            id='other-profession'
            category='round'
            type='radio'
            hooksprop={register({ required: true })}
          />
        </div>
        {errors.radio && <p className='registration-error'>You have to make a choice</p>}
        {errors.typeOfProfession && (
          <p className='registration-error'>You have to enter the name of the profession</p>
        )}

        <div className='registration__control-btns'>
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
