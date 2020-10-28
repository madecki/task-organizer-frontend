import React from 'react';
import './LoginView.css';
import { useHistory } from 'react-router';
import Button from '../Button/Button';
import Google from '../../Assets/Icon/google.png';
import Facebook from '../../Assets/Icon/facebook.svg';
import Input from '../Input/Input';

function LoginView() {
  const history = useHistory();

  const goToRegistation = () => {
    history.push('/registration');
  };

  return (
    <div className='login__container'>
      <div className='login__container__form-wrapper'>
        <h1>Sign In</h1>

        <form className='login__container__form'>
          <Input
            icon={['fas', 'envelope']}
            type='email'
            id='email'
            text='YOUR E-MAIL'
            placeholder='example@gmail.com'
          />

          <Input
            icon={['fas', 'lock']}
            type='password'
            id='password'
            text='PASSWORD'
            placeholder='A1234567'
          />

          <Button color='turquoise' label='SIGN IN' />
        </form>

        <a href='#' className='login__container__form__reminder'>
          Forgot Password?
        </a>

        <div className='login__separator'>
          <div className='login__separator__line' />
          <p>OR</p>
          <div className='login__separator__line' />
        </div>
        <div className='login__social-btns'>
          <Button color='white' imgIcon={Google} />
          <Button color='blue' imgIcon={Facebook} />
        </div>
      </div>

      <div className='login__sign-up'>
        <p>Don&apos;t have an account?</p>
        <Button label='SIGN UP FOR FREE' size='hover' callBackFn={() => goToRegistation()} />
      </div>
    </div>
  );
}

export default LoginView;
