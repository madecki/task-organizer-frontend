import React from 'react';
import './ProfessionsList.css';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import Checkbox from '../../Checkbox/Checkbox';
import Input from '../../Input/Input';

function ProfessionsList() {
  const { register, errors } = useForm({ reValidateMode: 'onSubmit' });

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
        <Checkbox
          key={uuidv4()}
          text={prof}
          id={prof}
          category='round'
          type='radio'
          hooksprop={register({ required: true })}
          value={prof}
        />
      ))}
      {errors.id && <p className='registration-error'>You have to make a choice</p>}

      <div className='checkbox-and-input-wrapper'>
        <Checkbox text='Other (which?)' id='other-profession' category='round' type='radio' />
        <Input type='text' placeholder='Work' id='typeOfProfession' />
      </div>
    </>
  );
}

export default ProfessionsList;
