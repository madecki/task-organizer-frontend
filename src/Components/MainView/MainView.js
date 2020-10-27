import React from 'react';
import ForecastView from '../ForecastView/ForecastView';
import TasksView from '../TasksView/TasksView';
import './MainView.css';

function MainView() {
  return (
    <div className='main__container'>
      <ForecastView />
      <TasksView />
    </div>
  );
}

export default MainView;
