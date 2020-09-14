import React from 'react';
import './LoginView.css';
import Button from '../Button/Button';

function LoginView() {
  return (
    <>
      <div className='login__container'>
        <h1>Sign In</h1>
        <form className='login__form'>
          <label>YOUR E-MAIL</label>
          <div className='login__input-wrapper--mail'>
            <div className='login__input-wrapper__icon'>
              <i className="fas fa-envelope"></i>
            </div>
            <input className='login__input-wrapper__text'></input>
          </div>
          <label>PASSWORD</label>
          <div className='login__input-wrapper'>
            <div className='login__input-wrapper--password'>
              <div className='login__input-wrapper__icon'>
                <i className="fas fa-lock"></i>
              </div>
              <input className='login__input-wrapper__text'></input>
            </div>
            <div className='login__input-wrapper__btn'>
              <Button />
            </div>
          </div>
        </form>
        <a>Forgot Password?</a>
        <div className='login__wrapper'>
          <div className='login__wrapper__line' />
          <p>OR</p>
          <div className='login__wrapper__line' />
        </div>
        <div className='login__wrapper login__wrapper--btn'>
          <Button />
          <Button />
        </div>
      </div>
      <div className='login__container login__container--bottom'>
        <div className='login__container__wrapper'>
          <p>Don't have an account</p>
          <Button />
        </div>
      </div>
    </>
  );
}

export default LoginView;
