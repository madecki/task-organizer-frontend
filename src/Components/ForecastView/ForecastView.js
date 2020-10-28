import React, { useState, useEffect } from 'react';
import { format, getHours, getISODay, getMinutes } from 'date-fns';
import getWeatherByCoordinates from '../../request';
import './ForecastView.css';

function ForecastView() {
  const [weatherInfo, setWeatherInfo] = useState('');

  function success(pos) {
    const crd = pos.coords;
    const { latitude } = crd;
    const { longitude } = crd;
    getWeatherByCoordinates(latitude, longitude).then(resp => {
      const { data } = resp;
      const listOfWeatherInfo = {
        city: data.name,
        temp: Math.round(data.main.temp),
        icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        desc: `${data.weather[0].description} icon`
      };
      setWeatherInfo(listOfWeatherInfo);
    });
  }

  const currentTime = date => {
    const hour = getHours(date);
    const minutes = getMinutes(date);
    return minutes.toString().length === 1 ? `${hour}:0${minutes}` : `${hour}:${minutes}`;
  };

  const dayOfWeek = date => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[getISODay(date)];
    return day;
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  return (
    <div className='forecast__container'>
      <h2 className='forecast__city'>{weatherInfo.city}</h2>
      <div className='hour-and-weather-wrapper'>
        <p className='forecast__hour'>{currentTime(new Date())}</p>
        <div className='forecast__weather'>
          <img src={weatherInfo.icon} alt={weatherInfo.desc} />
          <p>{weatherInfo.temp}°C</p>
        </div>
      </div>
      <p className='forecast__date'>
        {`${format(new Date(), 'dd.MM.yyyy')} | ${dayOfWeek(new Date())}`}
      </p>
    </div>
  );
}

export default ForecastView;
