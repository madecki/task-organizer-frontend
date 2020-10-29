import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Task from './Task/Task';
import './TasksView.css';

const tasksArray = ['Wireframing', 'Design Interaction', 'Wireframe Update'];

function TasksView() {

  return (
    <div className='tasks__container'>
      <h2 className='tasks-list__title'>Task to do</h2>
      <p className='tasks-list__text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare pretium placerat ut platea.
        Purus blandit integer sagittis massa vel est hac.{' '}
      </p>
      <div className='tasks-list__wrapper'>
        {tasksArray.map(task => {
          return <Task text={task}/>
        })}
      </div>

      <button className="tasks-list__add-task--btn"><FontAwesomeIcon className="tasks-list__add-task--btn__plus-icon" icon={['fas', 'plus']}/></button>
    </div>
  );
}

export default TasksView;
