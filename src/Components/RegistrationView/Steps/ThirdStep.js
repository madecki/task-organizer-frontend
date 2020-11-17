import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import Button from '../../Button/Button';

function ThirdStep({ callBackFn, stepfunc }) {
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
        callBackFn={stepfunc}
      />

      <Button
        icon={['fas', 'user']}
        uniqueBtn='type-of-use'
        label='PERSONAL'
        callBackFn={stepfunc}
      />

      <Button
        icon={['fas', 'graduation-cap']}
        uniqueBtn='type-of-use'
        label='SCHOOL'
        callBackFn={event => selectedType(event)}
        selectedButton={selectedButton}
      />

      <div className='registration__control-btns'>
        <Button label='PREV' uniqueBtn='hover' callBackFn={callBackFn} />
        <Button color='turquoise' label='FINISH' type='submit' />
      </div>
    </>
  );
}

ThirdStep.propTypes = {
  callBackFn: PropTypes.func.isRequired,
  stepfunc: PropTypes.func.isRequired
};

export default ThirdStep;
