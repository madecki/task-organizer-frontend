import React, { useState } from 'react';
import './RegistrationView.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button/Button';
import Google from '../../Assets/Icon/google.png';
import Input from '../Input/Input';

function RegistrationView() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    let whichStep = currentStep;

    whichStep = currentStep === 1 ? 2 : currentStep + 1;

    setCurrentStep(whichStep);
  };

  const prevStep = () => {
    let whichStep = currentStep;

    whichStep = currentStep === 2 ? 1 : currentStep - 1;
    setCurrentStep(whichStep);
  };

  return (
    <>
      {currentStep === 1 && (
        <div className='centered-container'>
          <div className='registration__container'>
            <div className='registration__container--padding'>
              <h1>Create Account</h1>

              <form className='registration__form'>
                <Input
                  icon={['fas', 'user']}
                  type='text'
                  id='first-name'
                  text='FIRST NAME'
                  placeholder='Bill'
                />
                <Input
                  icon={['fas', 'user']}
                  type='text'
                  id='last-name'
                  text='LAST NAME'
                  placeholder='Gates'
                />
                <Input
                  icon={['fas', 'user']}
                  type='text'
                  id='nick-name'
                  text='NICKNAME'
                  placeholder='Covid-19'
                />
              </form>

              <p className='terms-and-condition-agreement'>
                By creating an account you agree to the <a href='#'>Terms of Service</a> and{' '}
                <a href='#'>Privacy Policy</a>
              </p>

              <Button label='NEXT' size='extra-large' func={() => nextStep()} />

              <div className='registration__wrapper'>
                <div className='registration__wrapper__line' />
                <p>OR</p>
                <div className='registration__wrapper__line' />
              </div>

              <div className='registration__wrapper registration__wrapper--btn'>
                <Button
                  color='white'
                  imgIcon={Google}
                  onClick={() => {
                    let whichStep = currentStep;

                    whichStep = currentStep === 2 ? 1 : currentStep - 1;
                    setCurrentStep(whichStep);
                  }}
                />
                <Button color='blue' icon={['fab', 'facebook-f']} label='FACEBOOK' />
              </div>
            </div>
          </div>
        </div>
      )}{' '}
      {currentStep === 2 && (
        <div className='centered-container'>
          <div className='registration__container'>
            <div className='registration__container--padding'>
              <p className='step-counter'>Step {currentStep} of 5</p>
              <form className='registration__form'>
                <Input
                  icon={['fas', 'envelope']}
                  type='email'
                  id='email'
                  text='E-MAIL'
                  placeholder='example@gmail.com'
                />
                <Input
                  icon={['fas', 'phone-square-alt']}
                  type='number'
                  id='phone-number'
                  text='PHONE NUMBER'
                  placeholder='+1800800800'
                />
              </form>

              <div className='registration__btn-wrapper'>
                <Button label='PREV' func={() => prevStep()} />
                <Button label='NEXT' func={() => nextStep()} />
              </div>
            </div>
          </div>
        </div>
      )}
      {currentStep === 3 && (
        <div className='centered-container'>
          <div className='registration__container'>
            <div className='registration__container--padding'>
              <p className='step-counter'>Step {currentStep} of 5</p>
              <form className='registration__form'>
                <Input
                  icon={['fas', 'lock']}
                  type='password'
                  id='password'
                  text='PASSWORD'
                  placeholder='A123456!'
                />
                <Input
                  icon={['fas', 'lock']}
                  type='password'
                  id='repeat-password'
                  text='REPEAT-PASSWORD'
                  placeholder='A123456!'
                />

                <div className='password-requirements'>
                  <h2>PASSWORD REQUIREMENTS:</h2>
                  <p>-Minimum 8 signs</p>
                  <p>-Minimum one big letter</p>
                  <p>-Minimum one number</p>
                  <p>-Minimum one special sign</p>
                </div>
              </form>

              <div className='registration__btn-wrapper'>
                <Button label='PREV' func={() => prevStep()} />
                <Button label='NEXT' func={() => nextStep()} />
              </div>
            </div>
          </div>
        </div>
      )}
      {currentStep === 4 && (
        <div className='centered-container'>
          <div className='registration__container'>
            <div className='registration__container--padding'>
              <p className='step-counter'>Step {currentStep} of 5</p>

              <form className='registration__form'>
                <Input
                  icon={['fas', 'flag']}
                  type='text'
                  id='country'
                  text='COUNTRY'
                  placeholder='USA'
                />
                <Input
                  icon={['fas', 'city']}
                  type='text'
                  id='city'
                  text='CITY'
                  placeholder='Washington'
                />
                <Input
                  icon={['fas', 'home']}
                  type='text'
                  id='street'
                  text='STREET AND BUILDING NUMBER'
                  placeholder='Pensnsylvania Avenue 23'
                />
                <Input
                  icon={['fas', 'address-card']}
                  type='text'
                  id='posta-code'
                  text='POSTAL CODE'
                  placeholder='L6Y 4N7'
                />
              </form>

              <div className='registration__wrapper registration__wrapper--btn'>
                <Button label='PREV' func={() => prevStep()} />
                <Button label='NEXT' func={() => nextStep()} />
              </div>
            </div>
          </div>
        </div>
      )}
      {currentStep === 5 && (
        <div className='centered-container'>
          <div className='registration__container'>
            <div className='registration__container--padding'>
              <p className='step-counter'>Step {currentStep} of 5</p>
              <h2>Tell us a bit about yourself</h2>
              <p>What will you be using our app for?</p>
              <div className='box-wrapper'>
                <div className='box-info'>
                  <FontAwesomeIcon icon={['fas', 'suitcase']} />
                  <p>Work</p>
                </div>
                <div className='box-info'>
                  <FontAwesomeIcon icon={['fas', 'user']} />
                  <p>Personal</p>
                </div>
                <div className='box-info'>
                  <FontAwesomeIcon icon={['fas', 'graduation-cap']} />
                  <p>School</p>
                </div>
              </div>
              <div className='registration__wrapper registration__wrapper--btn'>
                <Button label='PREV' func={() => prevStep()} />
                <Button label='FINISH' />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RegistrationView;
