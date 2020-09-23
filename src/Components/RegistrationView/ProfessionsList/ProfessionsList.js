import React from 'react';
import './ProfessionsList.css';
import Checkbox from '../../Checkbox/Checkbox';

function ProfessionsList() {
  const professions = ['teacher', 'engineer', 'office worker', 'doctor', 'manual worker', 'farmer'];

  return (
    <>
      <Checkbox text={professions[0]} id='profession' />
      <Checkbox text={professions[1]} id='profession' />
    </>
  );
}

export default ProfessionsList;
