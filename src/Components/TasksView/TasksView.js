import React from 'react';
import Task from './Task/Task';
import './TasksView.css';

function TasksView() {
  return <div className='tasks__container' >
    <h2 className="tasks-list__title">Task to do</h2>
    <p className="tasks-list__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare pretium placerat ut platea. Purus blandit integer sagittis massa vel est hac. </p>
    <div className="tasks-list__wrapper">
      <Task />
    </div>
  </div>;
}

export default TasksView;
