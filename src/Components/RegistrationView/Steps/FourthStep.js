import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { useForm } from 'react-hook-form';
import Stepper from '../Stepper/Stepper';
import Button from '../../Button/Button';
import Radio from '../../Radio/Radio';
import Input from '../../Input/Input';

function FourthStep({ currentStep, onSubmit, callBackFn }) {
  const { register, handleSubmit, errors } = useForm({ reValidateMode: 'onSubmit' });
  const [selectedProfession, selectProfession] = useState('');

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
    'Transport',
    'Other'
  ];

  // useEffect(() => {
  //   console.log('selected changed', selectedProfession);
  // }, [selectedProfession]);

  return (
    <>
      <Stepper currentStep={currentStep} />
      <h2>What is your profession?</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {professions.map(prof => (
          <Radio
            key={prof}
            label={prof}
            name='profession'
            hooksprop={register({ required: true })}
            isChecked={prof === selectedProfession}
            onChange={profSelected => {
              selectProfession(profSelected);
            }}
          />
        ))}
        <div className='checkbox-and-input-wrapper'>
          {selectedProfession === 'Other' && (
            <Input type='text' id='typeOfProfession' placeholder='Work' />
          )}
        </div>

        {errors.profession && <p className='registration-error'>You have to make a choice</p>}
        {errors.typeOfProfession && (
          <p className='registration-error'>You have to enter the name of the profession</p>
        )}

        <div className='registration__control-btns'>
          <Button label='PREV' uniqueBtn='hover' callBackFn={callBackFn} />
          <Button color='turquoise' label='FINISH' type='submit' />
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
