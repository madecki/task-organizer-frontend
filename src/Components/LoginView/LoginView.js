import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button/Button';
import './LoginView.css';

function LoginView() {
  return (
    <>
      <div className='login__container'>
        <h1>Sign In</h1>

        <form className='login__form'>
          <label htmlFor='email'>YOUR E-MAIL</label>
          <div className='login__input-wrapper--mail'>
            <div className='login__input-wrapper__icon'>
              <FontAwesomeIcon icon='envelope' />
            </div>
            <input className='login__input-wrapper__text' id='email' type='email' />
          </div>

          <label htmlFor='password'>PASSWORD</label>
          <div className='login__input-wrapper'>
            <div className='login__input-wrapper--password'>
              <div className='login__input-wrapper__icon'>
                <FontAwesomeIcon icon='lock' />
              </div>
              <input className='login__input-wrapper__text' id='password' type='email' />
            </div>
            <div className='login__input-wrapper__btn'>
              <Button color='turquoise' label='SIGN IN' />
            </div>
          </div>
        </form>

        <a href='#' className='password-reminder'>
          Forgot Password?
        </a>

        <div className='login__wrapper'>
          <div className='login__wrapper__line' />
          <p>OR</p>
          <div className='login__wrapper__line' />
        </div>
        <div className='login__wrapper login__wrapper--btn'>
          <Button color='white' icon={['fab', 'google']} label='GOOGLE' />
          <Button color='blue' icon={['fab', 'facebook-f']} label='FACEBOOK' />
        </div>
      </div>

      <div className='login__container login__container--bottom'>
        <div className='login__container__wrapper'>
          <p>Don&apos;t have an account</p>
          <Button label='SIGN UP FOR FREE' size='small-padding' />
        </div>
      </div>
    </>
  );
}

export default LoginView;
