import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Button from '../Button/Button';
import FirstStep from './Steps/FirstStep';
import SecondStep from './Steps/SecondStep';
import ThirdStep from './Steps/ThirdStep';
import FourthStep from './Steps/FourthStep';
import Stepper from './Stepper/Stepper';
import './RegistrationView.css';

function RegistrationView() {
  const [currentStep, setCurrentStep] = useState(3);
  const [registrationData, setRegistrationData] = useState({});
  const errorText = 'This field is required';

  const nextStep = () => {
    const whichStep = currentStep === 1 ? 2 : currentStep + 1;
    setCurrentStep(whichStep);
  };

  const prevStep = () => {
    const whichStep = currentStep === 2 ? 1 : currentStep - 1;
    setCurrentStep(whichStep);
  };

  const stepTypeOfProfession = () => {
    let whichStep = currentStep;

    whichStep = currentStep === 3 ? 4 : currentStep === 4;
    setCurrentStep(whichStep);
  };

  const onSubmit = currentStepFields => {
    let formData = registrationData;
    formData = { ...formData, ...currentStepFields };

    setRegistrationData(formData);
    nextStep();
  };

  const history = useHistory();

  const goToLogin = () => {
    history.push('/');
  };

  const getWrapperClassName = () => {
    if (currentStep === 3) {
      return `registration__container__form-wrapper 
      registration__container__form-wrapper--type-of-use`;
    }
    if (currentStep === 4) {
      return `registration__container__form-wrapper 
      registration__container__form-wrapper--profession`;
    }
    return 'registration__container__form-wrapper';
  };

  return (
    <>
      <div className='registration__container'>
        <div className={getWrapperClassName()}>
          <Stepper currentStep={currentStep} />
          {currentStep === 1 && (
            <FirstStep onSubmit={onSubmit} errorText={errorText} formData={registrationData} />
          )}
          {currentStep === 2 && (
            <SecondStep
              onSubmit={onSubmit}
              errorText={errorText}
              callBackFn={() => prevStep()}
              formData={registrationData}
            />
          )}
          {currentStep === 3 && (
            <ThirdStep
              stepfunc={() => stepTypeOfProfession()}
              callBackFn={() => prevStep()}
              formData={registrationData}
            />
          )}
          {currentStep === 4 && (
            <FourthStep
              currentStep={currentStep}
              onSubmit={onSubmit}
              callBackFn={() => prevStep()}
              formData={registrationData}
            />
          )}
        </div>
        <div className='registration__sign-in'>
          <p>Do you already have an account?</p>
          <Button color='turquoise' label='SIGN IN' size='small' callBackFn={() => goToLogin()} />
        </div>
      </div>
    </>
  );
}

export default RegistrationView;
