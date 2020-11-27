import React from 'react';
import ForecastView from '../ForecastView/ForecastView';
import TaskView from '../TaskView/TaskView';
import './MainView.css';

function MainView() {
  return (
    <div className='main'>
      <div className='main__container'>
        <ForecastView />
        <TaskView />
      </div>
    </div>
  );
}

export default MainView;
