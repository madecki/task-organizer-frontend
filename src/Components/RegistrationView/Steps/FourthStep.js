import React from 'react';
import { PropTypes } from 'prop-types';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import Stepper from '../Stepper/Stepper';
import Button from '../../Button/Button';
import './FourthStep.css';
import Checkbox from '../../Checkbox/Checkbox';
import Input from '../../Input/Input';

function FourthStep({ currentStep, onSubmit, callBackFn }) {
  const { handleSubmit } = useForm({ reValidateMode: 'onSubmit' });
  const { register, errors } = useForm({ reValidateMode: 'onSubmit' });

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
            key={uuidv4()}
            text={prof}
            id={prof}
            category='round'
            type='radio'
            hooksprop={register({ required: true })}
          />
        ))}
        {errors.id && <p className='registration-error'>You have to make a choice</p>}

        <div className='checkbox-and-input-wrapper'>
          <Checkbox text='Other (which?)' id='other-profession' category='round' type='radio' />
          <Input type='text' placeholder='Work' id='typeOfProfession' />
        </div>
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
