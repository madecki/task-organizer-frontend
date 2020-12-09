import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Button from '../Button/Button';
import FirstStep from './Steps/FirstStep';
import SecondStep from './Steps/SecondStep';
import ThirdStep from './Steps/ThirdStep';
import FourthStep from './Steps/FourthStep';
import FifthStep from './Steps/FifthStep';
import Stepper from './Stepper/Stepper';
import './RegistrationView.css';
import submitRegistrationData from '../../requests';

function RegistrationView() {
  const [currentStep, setCurrentStep] = useState(3);
  const [registrationData, setRegistrationData] = useState({});
  const [connectionState, setConnectionState] = useState('');
  const errorText = 'This field is required';

  const nextStep = () => {
    const whichStep = currentStep === 0 ? 1 : currentStep + 1;
    setCurrentStep(whichStep);
  };

  const prevStep = () => {
    const whichStep = currentStep === 1 ? 0 : currentStep - 1;
    setCurrentStep(whichStep);
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
    nextStep();
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
    submitRegistrationData(registrationData);
    await Promise.resolve('Success')
      .then(() => {
        setConnectionState(1);
      })
      .catch(() => {
        setConnectionState(2);
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
              callBackFn={() => prevStep()}
              formData={registrationData}
            />
          )}
          {currentStep === 2 && (
            <ThirdStep
              stepfunc={() => stepTypeOfProfession()}
              callBackFn={() => prevStep()}
              formData={registrationData}
            />
          )}
          {currentStep === 3 && (
            <FourthStep
              currentStep={currentStep}
              onSubmit={() => {
                onSubmit();
                sendRequestAndDisplayState();
              }}
              callBackFn={() => prevStep()}
              formData={registrationData}
            />
          )}
          {currentStep === 4 && (
            <FifthStep onSubmit={() => goToLogin()} connectionState={Math.floor(connectionState)} />
          )}
        </div>
        {currentStep !== 4 && (
          <div className='registration__sign-in'>
            <p>Do you already have an account?</p>
            <Button color='turquoise' label='SIGN IN' size='small' callBackFn={() => goToLogin()} />
          </div>
        )}
      </div>
    </>
  );
}

export default RegistrationView;
