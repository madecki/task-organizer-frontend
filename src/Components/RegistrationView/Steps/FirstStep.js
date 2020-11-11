import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { PropTypes } from 'prop-types';
import Stepper from '../Stepper/Stepper';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import Checkbox from '../../Checkbox/Checkbox';
import Google from '../../../Assets/Icon/google.png';
import Facebook from '../../../Assets/Icon/facebook.svg';

function FirstStep({ currentStep, onSubmit, errorText, formData }) {
  const { register, handleSubmit, errors, getValues } = useForm({ reValidateMode: 'onSubmit' });
  const [checked, setChecked] = useState(false);

  return (
    <>
      <h1>Create Account</h1>
      <Stepper currentStep={currentStep} />
      <form className='registration__container__form' onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          icon={['fas', 'user']}
          type='text'
          id='firstName'
          text='FIRST NAME'
          placeholder='Kevin'
          hooksprop={register({ required: true, minLength: 2 })}
          value={formData.firstName}
        />
        {errors.firstName && errors.firstName.type === 'required' && (
          <p className='registration-error'>{errorText}</p>
        )}
        {errors.firstName && errors.firstName.type === 'minLength' && (
          <p className='registration-error'>This field is required at least 2 signs</p>
        )}

        <Input
          icon={['fas', 'user']}
          type='text'
          id='lastName'
          text='LAST NAME'
          placeholder='Walker'
          hooksprop={register({ required: true, minLength: 2 })}
          value={formData.lastName}
        />
        {errors.lastName && errors.lastName.type === 'required' && (
          <p className='registration-error'>{errorText}</p>
        )}
        {errors.lastName && errors.lastName.type === 'minLength' && (
          <p className='registration-error'>This field is required at least 2 signs</p>
        )}
        <Input
          icon={['fas', 'envelope']}
          type='email'
          id='email'
          text='E-MAIL'
          placeholder='example@gmail.com'
          hooksprop={register({
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
            }
          })}
          value={formData.email}
        />
        {errors.email && errors.email.type === 'required' && (
          <p className='registration-error'>{errorText}</p>
        )}
        {errors.email && errors.email.type === 'minLength' && (
          <p className='registration-error'>This field is required at least 2 signs</p>
        )}
        {errors.email && errors.email.type === 'pattern' && (
          <p className='registration-error'>Invalid e-mail</p>
        )}
        <Input
          icon={['fas', 'lock']}
          type='password'
          id='password'
          text='PASSWORD'
          placeholder='A1234567'
          autocomplete='new-password'
          hooksprop={register({
            required: true,
            minLength: 8,
            validate: value => [/[a-z]/, /[A-Z]/, /[0-9]/].every(pattern => pattern.test(value))
          })}
          value={formData.password}
        />
        {errors.password && errors.password.type === 'required' && (
          <p className='registration-error'>{errorText}</p>
        )}
        {errors.password && errors.password.type === 'minLength' && (
          <p className='registration-error'>This field is required at least 8 signs</p>
        )}
        {errors.password && errors.password.type === 'validate' && (
          <p className='registration-error'>
            Password must includes min 8 signs, at least one big letter and one number
          </p>
        )}
        <Input
          icon={['fas', 'lock']}
          type='password'
          id='passwordRep'
          text='REPEAT PASSWORD'
          placeholder='A1234567'
          name='passwordRep'
          autocomplete='new-password'
          hooksprop={register({
            required: true,
            minLength: 8,
            validate: value => {
              if (value === getValues().password) {
                return true;
              }
              return false;
            }
          })}
          value={formData.passwordRep}
        />
        {errors.passwordRep && errors.passwordRep.type === 'required' && (
          <p className='registration-error'>{errorText}</p>
        )}
        {errors.passwordRep && errors.passwordRep.type === 'minLength' && (
          <p className='registration-error'>This field is required at least 8 signs</p>
        )}
        {errors.passwordRep && errors.passwordRep.type === 'validate' && (
          <p className='registration-error'>Password don&apos;t match</p>
        )}
        <div className='password-requirements'>
          <h2>PASSWORD REQUIREMENTS</h2>
          <p>Password must includes minimum 8 signs, at least one big letter and one number</p>
        </div>
        <Checkbox
          text={[
            <p key={uuidv4()}>
              By creating an account you agree to the{' '}
              <a href='' key={uuidv4()}>
                Terms of Service
              </a>{' '}
              and{' '}
              <a href='' key={uuidv4()}>
                Privacy Policy
              </a>
            </p>
          ]}
          id='terms'
          name='terms'
          type='checkbox'
          hooksprop={register({ required: true })}
          checked={checked}
          onChange={event => setChecked(event.target.checked)}
        />
        {errors.terms && (
          <p className='registration-error'>
            You must agree to our terms of service and privacy policy
          </p>
        )}
        <Button label='NEXT' uniqueBtn='hover' type='submit' />
        <div className='registration__separator'>
          <div className='registration__separator__line' />
          <p>OR</p>
          <div className='registration__separator__line' />
        </div>
        <div className='registration__social-btns'>
          <Button color='white' imgIcon={Google} />
          <Button color='blue' imgIcon={Facebook} />
        </div>
      </form>
    </>
  );
}

FirstStep.propTypes = {
  currentStep: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errorText: PropTypes.string.isRequired,
  formData: PropTypes.objectOf(PropTypes.string).isRequired
};

export default FirstStep;
