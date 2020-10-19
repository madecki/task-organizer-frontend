import React from 'react';
import './LoginView.css';
import { useHistory } from 'react-router';
import Button from '../Button/Button';
import Google from '../../Assets/Icon/google.png';
import Input from '../Input/Input';

function LoginView() {
  const history = useHistory();

  const goToRegistation = () => {
    history.push('/registration');
  };

  return (
    <div className='centered-container centered-container--login'>
      <div className='login__container'>
        <div className='login__container--padding'>
          <h1>Sign In</h1>

          <form className='login__form'>
            <Input
              icon={['fas', 'envelope']}
              type='email'
              id='email'
              text='YOUR E-MAIL'
              placeholder='example@gmail.com'
            />

            <div className='login__input-wrapper'>
              <Input
                icon={['fas', 'lock']}
                size='small'
                type='password'
                id='password'
                text='PASSWORD'
                placeholder='A1234567'
              />

              <div className='login__input-wrapper__btn'>
                <Button color='turquoise' size='medium' label='SIGN IN' />
              </div>
            </div>
          </form>

          <a href='#' className='password-reminder'>
            Forgot Password?
          </a>

          <div className='login__separator'>
            <div className='login__separator__line' />
            <p>OR</p>
            <div className='login__separator__line' />
          </div>
          <div className='login__social-btns'>
            <Button color='white' imgIcon={Google} />
            <Button color='blue' icon={['fab', 'facebook-f']} label='FACEBOOK' />
          </div>
        </div>
        <div className='login__sign-up-container'>
          <div className='login__sign-up-container__wrapper'>
            <p>Don&apos;t have an account?</p>
            <Button label='SIGN UP FOR FREE' size='small' callBackFn={() => goToRegistation()} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginView;
