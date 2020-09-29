import React from 'react';
import { useForm } from 'react-hook-form';
import { PropTypes } from 'prop-types';
import Stepper from '../Stepper/Stepper';
import Button from '../../Button/Button';
import Input from '../../Input/Input';

function SecondStep({ currentStep, onSubmit, errorText, callBackFn }) {
  const { register, handleSubmit, errors } = useForm({ reValidateMode: 'onSubmit' });

  return (
    <>
      <Stepper currentStep={currentStep} />{' '}
      <form className='registration__form' onSubmit={handleSubmit(onSubmit)}>
        <Input
          icon={['fas', 'phone-square-alt']}
          type='phone'
          id='phoneNumber'
          text='PHONE NUMBER'
          placeholder='+1800800800'
          hooksprop={register({ required: true, minLength: 9, maxLength: 9 })}
        />
        {errors.phoneNumber && errors.phoneNumber.type === 'required' && (
          <p className='registration-error'>{errorText}</p>
        )}
        {errors.phoneNumber && errors.phoneNumber.type === 'minLength' && (
          <p className='registration-error'>This field is required at least 9 signs</p>
        )}
        {errors.phoneNumber && errors.phoneNumber.type === 'maxLength' && (
          <p className='registration-error'>This field is required max 9 signs</p>
        )}
        <Input
          icon={['fas', 'calendar-alt']}
          type='date'
          id='dateOfBirth'
          text='DATE OF BIRTH'
          placeholder='26'
          sizeWrapperText='small'
          hooksprop={register({ required: true })}
        />
        {errors.dateOfBirth && errors.dateOfBirth.type === 'required' && (
          <p className='registration-error'>{errorText}</p>
        )}
        <Input
          icon={['fas', 'flag']}
          type='text'
          id='country'
          text='COUNTRY'
          placeholder='USA'
          hooksprop={register({ required: true })}
        />
        {errors.country && errors.country.type === 'required' && (
          <p className='registration-error'>{errorText}</p>
        )}
        <Input
          icon={['fas', 'city']}
          type='text'
          id='city'
          text='CITY'
          placeholder='Washington'
          hooksprop={register({ required: true })}
        />
        {errors.city && errors.city.type === 'required' && (
          <p className='registration-error'>{errorText}</p>
        )}
        <Input
          icon={['fas', 'home']}
          type='text'
          id='street'
          text='STREET AND BUILDING NUMBER'
          placeholder='Pensnsylvania Avenue 23'
          hooksprop={register({
            required: true
          })}
        />
        {errors.street && errors.street.type === 'required' && (
          <p className='registration-error'>{errorText}</p>
        )}
        <Input
          icon={['fas', 'address-card']}
          type='text'
          id='postalCode'
          text='POSTAL CODE'
          placeholder='L6Y 4N7'
          hooksprop={register({
            required: true
          })}
        />
        {errors.postalCode && errors.postalCode.type === 'required' && (
          <p className='registration-error'>{errorText}</p>
        )}
        <div className='registration__btn-wrapper'>
          <Button label='PREV' callBackFn={callBackFn} />
          <Button label='NEXT' typeBtn='submit' />
        </div>
      </form>
    </>
  );
}

SecondStep.propTypes = {
  currentStep: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errorText: PropTypes.string.isRequired,
  callBackFn: PropTypes.func.isRequired
};

export default SecondStep;
