import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import Button from '../../Button/Button';
import submitRegistrationData from '../../../requests';

function FifthStep({ formData, onSubmit }) {
  const [backendConnectionError, setErrorState] = useState(false);
  const [connectionMessage, setConnectionMessage] = useState('');
  const messageClassName =
    connectionMessage === 'Data submited. Redirecting to Login'
      ? 'data-request-success-message'
      : 'data-request-error-message';
  const [counter, setCounter] = useState(5);

  const sendRequestAndDisplayState = async () => {
    submitRegistrationData(formData);
    await Promise.resolve('Success')
      .then(() => {
        setConnectionMessage('Data submited. Redirecting to Login');
        startCountdownAndRedirect();
      })
      .catch(() => {
        setErrorState(true);
        setConnectionMessage(
          'Connection with backend failed. Data not saved. Please reload and try again!'
        );
      });
  };

  const startCountdownAndRedirect = () => {
    setTimeout(onSubmit, 5000);
  };

  useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  sendRequestAndDisplayState();
  return (
    <>
      <h2 className={messageClassName}>{connectionMessage}</h2>
      {backendConnectionError && (
        <Button label='RELOAD' icon={faSyncAlt} onSubmit={() => console.log('działa')} />
      )}
      {!backendConnectionError && (
        <>
          <p>You will be redirected in {counter}</p>
          <p>OR</p>
          <Button color='turquoise' label='SIGN IN' size='small' onSubmit={onSubmit} />
        </>
      )}
    </>
  );
}

FifthStep.propTypes = {
  formData: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.bool])).isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default FifthStep;
