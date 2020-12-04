import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import Button from '../../Button/Button';
import submitRegistrationData from '../../../requests';

function FifthStep({ formData }) {
  const [backendConnectionError, setErrorState] = useState(false);
  const [connectionMessage, setConnectionMessage] = useState('');

  const sendRequestAndDisplayState = () => {
    submitRegistrationData(formData)
      .then(() => {
        setConnectionMessage('Data submited. Redirecting to Login ');
      })
      .catch(() => {
        setErrorState(true);
        setConnectionMessage(
          'Connection with backend failed. Data not saved. Please reload and try again!'
        );
      });
  };

  sendRequestAndDisplayState();
  return (
    <>
      <h3>{connectionMessage}</h3>
      {backendConnectionError && <Button label='RELOAD' />}
    </>
  );
}

FifthStep.propTypes = {
  formData: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.bool])).isRequired
};

export default FifthStep;
