import React, { useState } from 'react';
import './RegistrationView.css';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import Button from '../Button/Button';
import Google from '../../Assets/Icon/google.png';
import Input from '../Input/Input';
import Checkbox from '../Checkbox/Checkbox';
import ProfessionsList from './ProfessionsList/ProfessionsList';
import Stepper from './Stepper/Stepper';

function RegistrationView() {
  const [currentStep, setCurrentStep] = useState(1);
  const { register, handleSubmit, errors } = useForm();
  const [isValided, setIsValided] = useState(true);

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

  const stepTypeOfProfession = () => {
    let whichStep = currentStep;

    whichStep = currentStep === 3 ? 4 : currentStep === 4;
    setCurrentStep(whichStep);
  };

  const onSubmit = data => {
    setIsValided(false);
    if (data.password !== data.passwordRep) {
      console.log('hasła są rozne', isValided);
      return;
    }
    setIsValided(true);
    if (data.password === data.passwordRep) {
      console.log('git', isValided);
      nextStep();
    }
  };

  return (
    <>
      {currentStep === 1 && (
        <div className='centered-container'>
          <div className='registration__container'>
            <div className='registration__container--padding'>
              <h1>Create Account</h1>
              <Stepper currentStep={currentStep} />
              <form className='registration__form' onSubmit={handleSubmit(onSubmit)}>
                <Input
                  icon={['fas', 'user']}
                  type='text'
                  id='firstName'
                  text='FIRST NAME'
                  placeholder='Bill'
                  hooksprop={register({ required: true, minLength: 2 })}
                />

                {errors.firstName && errors.firstName.type === 'required' && (
                  <p className='registration-error'>First name is required</p>
                )}
                {errors.firstName && errors.firstName.type === 'minLength' && (
                  <p className='registration-error'>This field is required at least 2 signs</p>
                )}

                <Input
                  icon={['fas', 'user']}
                  type='text'
                  id='lastName'
                  text='LAST NAME'
                  placeholder='Gates'
                  hooksprop={register({ required: true, minLength: 2 })}
                />
                {errors.lastName && errors.lastName.type === 'required' && (
                  <p className='registration-error'>Last name is required</p>
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
                  hooksprop={register({ required: true })}
                />
                {errors.email && errors.email.type === 'required' && (
                  <p className='registration-error'>Email is required</p>
                )}
                {errors.email && errors.email.type === 'minLength' && (
                  <p className='registration-error'>This field is required at least 2 signs</p>
                )}
                <Input
                  icon={['fas', 'lock']}
                  type='password'
                  id='password'
                  text='PASSWORD'
                  placeholder='A1234567'
                  hooksprop={register({
                    required: true,
                    minLength: 8,
                    validate: value =>
                      [/[a-z]/, /[A-Z]/, /[0-9]/].every(pattern => pattern.test(value))
                  })}
                />
                {errors.password && errors.password.type === 'required' && (
                  <p className='registration-error'>Password is required</p>
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
                  hooksprop={register({
                    required: true,
                    minLength: 8,
                    validate: isValided === true
                  })}
                />
                {errors.passwordRep && errors.passwordRep.type === 'required' && (
                  <p className='registration-error'>Password is required</p>
                )}
                {errors.passwordRep && errors.passwordRep.type === 'minLength' && (
                  <p className='registration-error'>This field is required at least 8 signs</p>
                )}
                {errors.passwordRep && errors.passwordRep.type === 'validate' && (
                  <p className='registration-error'>Password don&apos;t match</p>
                )}

                <div className='password-requirements'>
                  <h2>PASSWORD REQUIREMENTS</h2>
                  <p>
                    Password must includes minimum 8 signs, at least one big letter and one number
                  </p>
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
                  type='checkbox'
                  name='checkbox'
                  hooksprop={register({ required: true })}
                />
                {errors.checkbox && (
                  <p className='registration-error'>
                    You must agree to our terms of service and privacy policy
                  </p>
                )}

                <Button label='NEXT' size='extra-large' typeBtn='submit' />

                <div className='registration__wrapper'>
                  <div className='registration__wrapper__line' />
                  <p>OR</p>
                  <div className='registration__wrapper__line' />
                </div>

                <div className='registration__wrapper registration__wrapper--btn'>
                  <Button color='white' imgIcon={Google} />
                  <Button color='blue' icon={['fab', 'facebook-f']} label='FACEBOOK' />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}{' '}
      {currentStep === 2 && (
        <div className='centered-container'>
          <div className='registration__container'>
            <div className='registration__container--padding'>
              <Stepper currentStep={currentStep} />{' '}
              <form className='registration__form'>
                <Input
                  icon={['fas', 'phone-square-alt']}
                  type='number'
                  id='phoneNumber'
                  text='PHONE NUMBER'
                  placeholder='+1800800800'
                />
                <Input
                  icon={['fas', 'calendar-alt']}
                  type='date'
                  id='dateOfBirth'
                  text='DATE OF BIRTH'
                  placeholder='26'
                  sizeWrapperText='small'
                />
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
                  id='postaCode'
                  text='POSTAL CODE'
                  placeholder='L6Y 4N7'
                />
              </form>
              <div className='registration__btn-wrapper'>
                <Button label='PREV' func={() => prevStep()} />
                <Button label='NEXT' func={() => nextStep()} typeBtn='submit' />
              </div>
            </div>
          </div>
        </div>
      )}
      {currentStep === 3 && (
        <div className='centered-container'>
          <div className='registration__container'>
            <div className='registration__container--padding registration__container--type-of-use'>
              <Stepper currentStep={currentStep} />
              <h2>Tell us a bit about yourself</h2>
              <p>What will you be using our app for?</p>

              <Button
                icon={['fas', 'suitcase']}
                size='large'
                label='WORK'
                func={() => stepTypeOfProfession()}
              />

              <Button
                icon={['fas', 'user']}
                size='large'
                label='PERSONAL'
                func={() => stepTypeOfProfession()}
              />

              <Button icon={['fas', 'graduation-cap']} size='large' label='SCHOOL' />

              <div className='registration__wrapper registration__wrapper--btn'>
                <Button label='PREV' func={() => prevStep()} />
                <Button color='turquoise' label='FINISH' typeBtn='submit' />
              </div>
            </div>
          </div>
        </div>
      )}
      {currentStep === 4 && (
        <div className='centered-container'>
          <div className='registration__container'>
            <div className='registration__container--padding registration__container--profession'>
              <Stepper currentStep={currentStep} />
              <h2>What is your profession?</h2>
              <ProfessionsList />
              <div className='registration__wrapper registration__wrapper--btn'>
                <Button label='PREV' func={() => prevStep()} />
                <Button color='turquoise' label='FINISH' typeBtn='submit' />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RegistrationView;
