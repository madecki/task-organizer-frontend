import React from 'react';
import './RegistrationView.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button/Button';

function RegistrationView() {
  return (
    <>
      <div className='registration__container'>
        <h1>Create Account</h1>

        <form className='registration__form'>
          <label htmlFor='name'>FIRST NAME</label>
          <div className='registration__input-wrapper--name'>
            <div className='registration__input-wrapper__icon'>
              <FontAwesomeIcon icon='user' />
            </div>
            <input className='registration__input-wrapper__text' id='name' type='text' />
          </div>
          <label htmlFor='name'>LAST NAME</label>
          <div className='registration__input-wrapper--name'>
            <div className='registration__input-wrapper__icon'>
              <FontAwesomeIcon icon='user' />
            </div>
            <input className='registration__input-wrapper__text' id='name' type='text' />
          </div>
          <label htmlFor='nickname'>NICKNAME</label>
          <div className='registration__input-wrapper--nickname'>
            <div className='registration__input-wrapper__icon'>
              <FontAwesomeIcon icon='user' />
            </div>
            <input className='registration__input-wrapper__text' id='nickname' type='text' />
          </div>
        </form>

        <p className='terms-and-condition-agreement'>
          By creating an account you agree to the <a href='#'>Terms of Service</a> and{' '}
          <a href='#'>Privacy Policy</a>
        </p>

        <div className='registration__wrapper'>
          <div className='registration__wrapper__line' />
          <p>OR</p>
          <div className='registration__wrapper__line' />
        </div>
        <div className='registration__wrapper registration__wrapper--btn'>
          <Button color='white' icon={['fab', 'google']} label='GOOGLE' />
          <Button color='blue' icon={['fab', 'facebook-f']} label='FACEBOOK' />
        </div>
      </div>
    </>
  );
}

export default RegistrationView;
