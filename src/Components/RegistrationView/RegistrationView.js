import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Button from '../Button/Button';
import FirstStep from './Steps/FirstStep';
import SecondStep from './Steps/SecondStep';
import ThirdStep from './Steps/ThirdStep';
import FourthStep from './Steps/FourthStep';
import FifthStep from './Steps/FifthStep';
import Stepper from './Stepper/Stepper';
import submitRegistrationData from '../../requests';
import './RegistrationView.css';

function RegistrationView() {
  const [currentStep, setCurrentStep] = useState(3);
  const [registrationData, setRegistrationData] = useState({});
  const [connectionState, setConnectionState] = useState(0);
  const [isLoading, setLoadingState] = useState(false);
  const errorText = 'This field is required';

  const nextStep = () => {
    const whichStep = currentStep === 0 ? 1 : currentStep + 1;
    setCurrentStep(whichStep);
  };

  const prevStep = () => {
    const whichStep = currentStep === 1 ? 0 : currentStep - 1;
    setCurrentStep(whichStep);
    if (currentStep > 3 && connectionState === 1) {
      setConnectionState(0);
    }
  };

  const stepTypeOfProfession = () => {
    let whichStep = currentStep;

    whichStep = currentStep === 2 ? 3 : currentStep === 3;
    setCurrentStep(whichStep);
  };

  const onSubmit = currentStepFields => {
    let formData = registrationData;
    formData = { ...formData, ...currentStepFields };

    setRegistrationData(formData);

    if (currentStep === 3) {
      sendRequestAndDisplayState();
    }
    if (currentStep <= 3) {
      nextStep();
    }
  };

  const history = useHistory();

  const goToLogin = () => {
    history.push('/login');
  };

  const getWrapperClassName = () => {
    if (currentStep === 2) {
      return `registration__container__form-wrapper 
      registration__container__form-wrapper--type-of-use`;
    }
    if (currentStep === 3) {
      return `registration__container__form-wrapper 
      registration__container__form-wrapper--profession`;
    }
    return 'registration__container__form-wrapper';
  };

  const sendRequestAndDisplayState = async () => {
    setLoadingState(true);
    await submitRegistrationData(registrationData)
      .then(() => {
        setConnectionState(2);
        setLoadingState(false);
      })
      .catch(() => {
        setConnectionState(1);
        setLoadingState(false);
      });
  };

  return (
    <>
      <div className='registration__container'>
        <div className={getWrapperClassName()}>
          {currentStep !== 4 && <Stepper currentStep={currentStep} />}
          {currentStep === 0 && (
            <FirstStep onSubmit={onSubmit} errorText={errorText} formData={registrationData} />
          )}
          {currentStep === 1 && (
            <SecondStep
              onSubmit={onSubmit}
              errorText={errorText}
              callbackFn={() => prevStep()}
              formData={registrationData}
            />
          )}
          {currentStep === 2 && (
            <ThirdStep
              stepfunc={() => stepTypeOfProfession()}
              callbackFn={() => prevStep()}
              formData={registrationData}
            />
          )}
          {currentStep === 3 && (
            <FourthStep
              currentStep={currentStep}
              onSubmit={() => onSubmit()}
              callbackFn={() => prevStep()}
              formData={registrationData}
            />
          )}
          {currentStep === 4 && (
            <FifthStep
              currentStep={currentStep}
              callbackFn={() => prevStep()}
              connectionState={Math.floor(connectionState)}
              goToLogin={() => goToLogin()}
            />
          )}
        </div>
        {connectionState !== 1 && !isLoading && (
          <div className='registration__sign-in'>
            {currentStep !== 4 && <p>Do you already have an account?</p>}
            <Button color='turquoise' label='SIGN IN' size='small' callbackFn={() => goToLogin()} />
          </div>
        )}
      </div>
    </>
  );
}

export default RegistrationView;
