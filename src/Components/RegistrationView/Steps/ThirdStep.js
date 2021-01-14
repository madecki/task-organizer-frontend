import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import Button from '../../Button/Button';

function ThirdStep({ callbackFn, stepfunc }) {
  const [selectedButton, setSelectedButton] = useState('');
  const selectedType = () => {
    const whichButton = 'btn--selected';
    setSelectedButton(whichButton);
  };

  return (
    <>
      <h2>Tell us a bit about yourself</h2>
      <p className='paragraph-type-of-use'>What will you be using our app for?</p>

      <Button
        icon={['fas', 'suitcase']}
        uniqueBtn='type-of-use'
        label='WORK'
        callbackFn={stepfunc}
      />

      <Button
        icon={['fas', 'user']}
        uniqueBtn='type-of-use'
        label='PERSONAL'
        callbackFn={stepfunc}
      />

      <Button
        icon={['fas', 'graduation-cap']}
        uniqueBtn='type-of-use'
        label='SCHOOL'
        callbackFn={event => selectedType(event)}
        selectedButton={selectedButton}
      />

      <div className='registration__control-btns'>
        <Button label='PREV' uniqueBtn='hover' callbackFn={callbackFn} />
        <Button color='turquoise' label='FINISH' type='submit' />
      </div>
    </>
  );
}

ThirdStep.propTypes = {
  callbackFn: PropTypes.func.isRequired,
  stepfunc: PropTypes.func.isRequired
};

export default ThirdStep;
