import React, { useState } from 'react';
import { getWeatherByCoordinates } from '../../request';
import './ForecastView.css';

function ForecastView() {
  const [weatherInfo, setWeatherInfo] = useState('');

  navigator.geolocation.getCurrentPosition(success);

  function success(pos) {
    const crd = pos.coords;
    const { latitude } = crd;
    const { longitude } = crd;
    getWeatherByCoordinates(latitude, longitude).then(resp => {
      const { data } = resp;
      const listOfWeatherInfo = {
        city: data.name,
        temp: Math.round(data.main.temp),
        icon: data.weather[0].icon
      };
      setWeatherInfo(listOfWeatherInfo);
    });
  }

  const currentDate = date => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const numberOfMonth = date.getMonth() + 1;

    return `${month} ${numberOfMonth}.${year} | ${day}`;
  };

  return (
    <div className='forecast__container'>
      <h2 className='forecast__container__city'>{weatherInfo.city}</h2>
      <div className='hour-and-weather-wrapper'>
        <p className='forecast__container__hour'>06:20 AM</p>
        <p className='forecast__container__weather'>
          <img src={`http://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`} alt='' />
          {weatherInfo.temp}° C
        </p>
      </div>
      <p className='forecast__container__date'>{currentDate(new Date())}</p>
    </div>
  );
}

export default ForecastView;
