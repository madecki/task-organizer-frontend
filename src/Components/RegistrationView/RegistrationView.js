import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './RegistrationView.css';
import Button from '../Button/Button';
import FirstStep from './Steps/FirstStep';
import SecondStep from './Steps/SecondStep';
import ThirdStep from './Steps/ThirdStep';
import FourthStep from './Steps/FourthStep';

function RegistrationView() {
  const [currentStep, setCurrentStep] = useState(1);
  const errorText = 'This field is required';

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

  const onSubmit = () => {
    nextStep();
  };

  const history = useHistory();

  const goToLogin = () => {
    history.push('/');
  };

  return (
    <>
      {currentStep === 1 && (
        <div className='registration__container'>
          <div className='registration__container__form-wrapper'>
            <FirstStep currentStep={currentStep} onSubmit={onSubmit} errorText={errorText} />
          </div>
          <div className='registration__sign-in'>
            <p>Do you already have an account?</p>
            <Button color='turquoise' label='SIGN IN' size='small' callBackFn={() => goToLogin()} />
          </div>
        </div>
      )}{' '}
      {currentStep === 2 && (
        <div className='registration__container'>
          <div className='registration__container__form-wrapper'>
            <SecondStep
              currentStep={currentStep}
              onSubmit={onSubmit}
              errorText={errorText}
              callBackFn={() => prevStep()}
            />
          </div>
        </div>
      )}
      {currentStep === 3 && (
        <div className='registration__container'>
          <div
            className='registration__container__form-wrapper
            registration__container__form-wrapper--type-of-use'>
            <ThirdStep
              currentStep={currentStep}
              stepfunc={() => stepTypeOfProfession()}
              callBackFn={() => prevStep()}
            />
          </div>
        </div>
      )}
      {currentStep === 4 && (
        <div className='registration__container'>
          <div
            className='registration__container__form-wrapper
          registration__container__form-wrapper--profession'>
            <FourthStep
              currentStep={currentStep}
              onSubmit={onSubmit}
              callBackFn={() => prevStep()}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default RegistrationView;
