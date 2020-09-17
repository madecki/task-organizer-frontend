import React from 'react';
import './RegistrationView.css';
import Button from '../Button/Button';
import Input from '../Input/Input';

function RegistrationView() {
  return (
    <>
      <div className='registration__container'>
        <h1>Create Account</h1>

        <form className='registration__form'>
          <Input icon={['fas', 'user']} type='text' id='first-name' text='FIRST NAME' />
          <Input icon={['fas', 'user']} type='text' id='last-name' text='LAST NAME' />
          <Input icon={['fas', 'user']} type='text' id='nick-name' text='NICKNAME' />
        </form>

        <p className='terms-and-condition-agreement'>
          By creating an account you agree to the <a href='#'>Terms of Service</a> and{' '}
          <a href='#'>Privacy Policy</a>
        </p>

        <Button label='NEXT' size='extra-large' />

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
