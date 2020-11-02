import React from 'react';
import './ForecastView.css';

function ForecastView() {
  return (
    <div className='forecast__container'>
      <h2 className='forecast__container__city'>New Delhi</h2>
      <div className='hour-and-weather-wrapper'>
        <p className='forecast__container__hour'>06:20 AM</p>
        <p className='forecast__container__weather'>18°C</p>
      </div>
      <p className='forecast__container__date'>November 10.2020 | Wednesday</p>
    </div>
  );
}

export default ForecastView;
