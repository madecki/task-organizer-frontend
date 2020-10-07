import React, { useState } from 'react';
import './RegistrationView.css';
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

  const onSubmit = data => {
    console.log(data);
    nextStep();
  };

  return (
    <>
      {currentStep === 3 && (
        <div className='centered-container'>
          <div className='registration__container'>
            <div className='registration__container--padding'>
              <FirstStep currentStep={currentStep} onSubmit={onSubmit} errorText={errorText} />
            </div>
          </div>
        </div>
      )}{' '}
      {currentStep === 2 && (
        <div className='centered-container'>
          <div className='registration__container'>
            <div className='registration__container--padding'>
              <SecondStep
                currentStep={currentStep}
                onSubmit={onSubmit}
                errorText={errorText}
                callBackFn={() => prevStep()}
              />
            </div>
          </div>
        </div>
      )}
      {currentStep === 1 && (
        <div className='centered-container'>
          <div className='registration__container'>
            <div className='registration__container--padding registration__container--type-of-use'>
              <ThirdStep
                currentStep={currentStep}
                stepfunc={() => stepTypeOfProfession()}
                callBackFn={() => prevStep()}
              />
            </div>
          </div>
        </div>
      )}
      {currentStep === 4 && (
        <div className='centered-container'>
          <div className='registration__container'>
            <div className='registration__container--padding registration__container--profession'>
              <FourthStep
                currentStep={currentStep}
                onSubmit={onSubmit}
                callBackFn={() => prevStep()}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RegistrationView;
