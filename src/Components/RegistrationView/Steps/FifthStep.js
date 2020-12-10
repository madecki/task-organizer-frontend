import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import Button from '../../Button/Button';

function FifthStep({ onSubmit, connectionState, onClick }) {
  const [counter, setCounter] = useState(5);
  const backendConnectionError = connectionState !== 1;
  const messages = {
    error: 'Data submited. Redirecting to Login',
    success: 'Connection with backend failed. Data not saved. Please reload and try again!'
  };
  const messageClassName =
    connectionState === 1 ? 'data-request-success-message' : 'data-request-error-message';

  const startCountdownAndRedirect = () => {
    setTimeout(onSubmit, 5000);
  };

  useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <>
      <h2 className={messageClassName}>
        {connectionState === 1 ? messages.error : messages.success}
      </h2>
      {backendConnectionError && <Button label='RELOAD' icon={faSyncAlt} callbackFn={onClick} />}
      {!backendConnectionError && (
        <form>
          {startCountdownAndRedirect()}
          <p>You will be redirected in {counter}</p>
          <p>OR</p>
          <Button color='turquoise' label='SIGN IN' size='small' onSubmit={onSubmit} />
        </form>
      )}
    </>
  );
}

FifthStep.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  connectionState: PropTypes.number.isRequired
};

export default FifthStep;
