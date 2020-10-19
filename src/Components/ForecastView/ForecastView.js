import React from 'react';
import './ForecastView.css';

function ForecastView() {
  return (
    <div className='forecast__container'>
      <div className='forecast__container__city'>
        <h2>New Delhi</h2>
      </div>
      <div className='hour-and-weather-wrapper'>
        <div className='forecast__container__hour'>
          <p>06:20 AM</p>
        </div>
        <div className='forecast__container__weather'>
          <p>18°C</p>
        </div>
      </div>
      <div className='forecast__container__date'>
        <p>November 10.2020 | Wednesday</p>
      </div>
    </div>
  );
}

export default ForecastView;
