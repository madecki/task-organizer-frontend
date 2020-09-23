import React from 'react';
import './ProfessionsList.css';
import { v4 as uuidv4 } from 'uuid';
import Checkbox from '../../Checkbox/Checkbox';
import Input from '../../Input/Input';

function ProfessionsList() {
  const professions = [
    'Education',
    'Engineer',
    'Farmer',
    'Health service',
    'Manual worker',
    'Logistic',
    'IT',
    'Office worker',
    'Trade',
    'Transport'
  ];

  return (
    <>
      {professions.map(prof => (
        <Checkbox key={uuidv4()} text={prof} id={uuidv4()} category='round' type='radio' />
      ))}
      <div className='checkbox-and-input-wrapper'>
        <Checkbox text='Other (which?)' id='other-profession' category='round' type='radio' />
        <Input type='text' placeholder='Work' id='type-of-profession' />
      </div>
    </>
  );
}

export default ProfessionsList;
