import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Task.css';

function Task() {
  return <div className='task__container' >
    <div className="task__circle">
      <FontAwesomeIcon className="task__circle__check-icon" icon={['fas', 'check']}/>
    </div>
    <div className="task__content">Wireframing</div>
    <FontAwesomeIcon className="task__delete_icon" icon={['fas', 'trash']} />
   </div>
}

export default Task;
