import React from 'react';
import { PropTypes } from 'prop-types';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import Button from '../../Button/Button';
import Loader from '../../Loader/Loader';

function FifthStep({ connectionState, callbackFn }) {
  const messages = {
    success: 'Data submited. Redirecting to Login',
    error: 'Connection with backend failed. Data not saved. Please reload and try again!'
  };
  const messageClassName =
    connectionState === 1 ? 'data-request-error-message' : 'data-request-success-message';

  return (
    <>
      {connectionState === 0 && <Loader />}
      {connectionState !== 0 && (
        <div className='connection-message'>
          <h2 className={messageClassName}>
            {connectionState === 1 ? messages.error : messages.success}
          </h2>
          {connectionState === 1 && (
            <Button label='RELOAD' icon={faSyncAlt} callbackFn={callbackFn} />
          )}
          {connectionState === 2 && (
            <>
              <p>You will be redirected in {}</p>
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
  connectionState: PropTypes.number.isRequired
};

export default FifthStep;
