import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { useForm } from 'react-hook-form';
import Button from '../../Button/Button';
import Radio from '../../Radio/Radio';
import Input from '../../Input/Input';
import { submitRegistrationData } from '../../../requests';

function FourthStep({ onSubmit, callBackFn, formData }) {
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

  const finishAndSendUserData = () => {
    submitRegistrationData(formData);
  };

  // useEffect(() => {
  //   console.log('selected changed', selectedProfession);
  // }, [selectedProfession]);

  return (
    <>
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
        {selectedProfession === 'Other' && (
          <Input type='text' id='typeOfProfession' placeholder='Please specify' />
        )}
        {errors.profession && <p className='registration-error'>You have to make a choice</p>}
        {errors.typeOfProfession && (
          <p className='registration-error'>You have to enter the name of the profession</p>
        )}

        <div className='registration__control-btns'>
          <Button label='PREV' uniqueBtn='hover' callBackFn={callBackFn} />
          <Button
            color='turquoise'
            label='FINISH'
            type='submit'
            onClick={finishAndSendUserData()}
          />
        </div>
      </form>
    </>
  );
}

FourthStep.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  callBackFn: PropTypes.func.isRequired,
  formData: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.bool])).isRequired
};

export default FourthStep;
