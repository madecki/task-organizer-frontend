import React from 'react';
import { useForm } from 'react-hook-form';
import { PropTypes } from 'prop-types';
import Stepper from '../Stepper/Stepper';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import Checkbox from '../../Checkbox/Checkbox';

function SecondStep({ currentStep, onSubmit, errorText, callBackFn }) {
  const { register, handleSubmit, errors } = useForm({ reValidateMode: 'onSubmit' });

  return (
    <>
      <Stepper currentStep={currentStep} />{' '}
      <form className='registration__container__form' onSubmit={handleSubmit(onSubmit)}>
        <div className='gender-wrapper'>
          <p className='gender-paragraph'>GENDER:</p>
          <Checkbox
            text='female'
            id='female'
            category='round'
            type='radio'
            hooksprop={register({ required: true })}
          />
          <Checkbox
            text='male'
            id='male'
            category='round'
            type='radio'
            hooksprop={register({ required: true })}
          />
          <Checkbox
            text='other'
            id='other'
            category='round'
            type='radio'
            hooksprop={register({ required: true })}
          />
          {errors.radio && <p className='registration-error'>You have to make a choice</p>}
        </div>
        <Input
          icon={['fas', 'phone-square-alt']}
          type='phone'
          id='phoneNumber'
          text='PHONE NUMBER'
          placeholder='800800800'
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
          type='text'
          id='dateOfBirth'
          text='DATE OF BIRTH'
          placeholder='01.01.1960'
          hooksprop={register({
            required: true,
            minLength: 10,
            maxLength: 10,
            pattern: {
              value: /[0-9][0-9][.][0-1][0-9][.][1-2][0-9][0-9][0-9]/
            }
          })}
        />
        {errors.dateOfBirth && errors.dateOfBirth.type === 'required' && (
          <p className='registration-error'>{errorText}</p>
        )}
        {errors.dateOfBirth && errors.dateOfBirth.type === 'pattern' && (
          <p className='registration-error'>Invalid date</p>
        )}
        {errors.dateOfBirth && errors.dateOfBirth.type === 'minLength' && (
          <p className='registration-error'>This field is required at least 10 signs</p>
        )}
        {errors.dateOfBirth && errors.dateOfBirth.type === 'maxLength' && (
          <p className='registration-error'>This field is required max 10 signs</p>
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
        <div className='registration__control-btns'>
          <Button label='PREV' uniqueBtn='hover' callBackFn={callBackFn} />
          <Button label='NEXT' uniqueBtn='hover' type='submit' />
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
