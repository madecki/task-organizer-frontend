import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropTypes } from 'prop-types';
import './Task.css';

function Task({text}) {
  const [isDone, setDone] = useState(false)

const iconSwitch = () => {
  !isDone ? setDone(true) : setDone(false);
 }

  return (
    <div className='task__container'>
      <button className='task__circle' onClick={() => iconSwitch()}>
       {!isDone ? <FontAwesomeIcon className='task__circle__circle-icon' icon={['far', 'circle']} /> : <FontAwesomeIcon className='task__circle__check-icon' icon={['fas', 'check']} />} </button>
      <h3 className='task__content'>{text}</h3>
      <FontAwesomeIcon className='task__delete-icon' icon={['fas', 'trash']} />
    </div>
  );
}

Task.propTypes = {text: PropTypes.string};
Task.defaultProps = {text: ''};


export default Task;
