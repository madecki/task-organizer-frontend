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

  // const startCountdownAndRedirect = () => {
  //   const timer1 = setTimeout(console.log('wyczyszczone1'), 2000);
  //   return () => {
  //     clearTimeout(timer1);
  //   };
  //   const timer2 = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
  //   return () => {
  //     clearInterval(timer);
  //     console.log('interval czyszczenie');
  //   };
  // };

  const intervalSetup = () => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => {
      if (counter === 1) {
        clearInterval(timer);
        setTimeout(onSubmit, 1000);
      } else clearInterval(timer);
    };
  };

  useEffect(intervalSetup, [counter]);

  return (
    <div className='connection-message'>
      <h2 className={messageClassName}>
        {connectionState === 1 ? messages.error : messages.success}
      </h2>
      {backendConnectionError && <Button label='RELOAD' icon={faSyncAlt} callbackFn={onClick} />}
      {!backendConnectionError && (
        <>
          {/* {startCountdownAndRedirect()} */}
          {/* {intervalSetup} */}
          <p>You will be redirected in {counter}</p>
          <p>OR</p>
          <Button color='turquoise' label='SIGN IN' size='small' callbackFn={onSubmit} />
        </>
      )}
    </div>
  );
}

FifthStep.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  connectionState: PropTypes.number.isRequired
};

export default FifthStep;
