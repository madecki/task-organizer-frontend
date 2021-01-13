import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { useForm } from 'react-hook-form';
import Button from '../../Button/Button';
import Radio from '../../Radio/Radio';
import Input from '../../Input/Input';

function FourthStep({ onSubmit, callbackFn, formData }) {
  const { register, handleSubmit, errors } = useForm({ reValidateMode: 'onSubmit' });
  const [selectedProfession, selectProfession] = useState(
    formData.proffession ? formData.proffession : ''
  );

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

  return (
    <>
      <h2>What is your profession?</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {professions.map(prof => (
          <Radio
            key={prof}
            label={prof}
            name='profession'
            value={formData.profession}
            hooksprop={register({ required: true })}
            isChecked={prof === selectedProfession}
            onChange={profSelected => {
              selectProfession(profSelected);
            }}
          />
        ))}
        {selectedProfession === 'Other' && (
          <Input type='text' id='typeOfProfession' placeholder='Please specify' />
        )}
        {errors.profession && <p className='registration-error'>You have to make a choice</p>}
        {errors.typeOfProfession && (
          <p className='registration-error'>You have to enter the name of the profession</p>
        )}

        <div className='registration__control-btns'>
          <Button label='PREV' uniqueBtn='hover' callbackFn={callbackFn} />
          <Button color='turquoise' label='FINISH' type='submit' />
        </div>
      </form>
    </>
  );
}

FourthStep.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  callbackFn: PropTypes.func.isRequired,
  formData: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.bool])).isRequired
};

export default FourthStep;
