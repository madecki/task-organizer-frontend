import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import Button from '../../Button/Button';
import Loader from '../../Loader/Loader';

function FifthStep({ connectionState, callbackFn, goToLogin }) {
  const [counter, setCounter] = useState(5);
  const [interval, setIntervalState] = useState();
  const [timeout, setTimeoutState] = useState();
  const messages = {
    success: 'Data submited. Redirecting to Login',
    error: 'Connection with backend failed. Data not saved. Please try again!'
  };
  const messageClassName =
    connectionState === 1 ? 'data-request-error-message' : 'data-request-success-message';

  const counterSetUp = () => {
    setIntervalState(
      setInterval(() => {
        setCounter(counter - 1);
      }, 1000)
    );
    return () => {
      clearInterval(interval);
    };
  };

  const timeoutSetup = () => {
    setTimeoutState(
      setTimeout(() => {
        goToLogin();
      }, 5000)
    );
    return () => {
      clearTimeout(timeout);
    };
  };

  useEffect(timeoutSetup, counterSetUp, []);

  return (
    <>
      {connectionState === 0 && <Loader />}
      {connectionState !== 0 && (
        <div className='connection-message'>
          <h2 className={messageClassName}>
            {connectionState === 1 ? messages.error : messages.success}
          </h2>
          {connectionState === 1 && (
            <Button label='TRY AGAIN' icon={faSyncAlt} callbackFn={callbackFn} />
          )}
          {connectionState === 2 && (
            <>
              <p>You will be redirected in {counter} </p>
              <p>OR</p>
            </>
          )}
        </div>
      )}
    </>
  );
}

FifthStep.propTypes = {
  callbackFn: PropTypes.func.isRequired,
  goToLogin: PropTypes.func.isRequired,
  connectionState: PropTypes.number.isRequired
};

export default FifthStep;
