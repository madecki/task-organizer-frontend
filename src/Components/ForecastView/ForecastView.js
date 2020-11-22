import React, { useState, useEffect } from 'react';
import { format, getHours, getISODay, getMinutes } from 'date-fns';
import getWeatherByCoordinates from '../../request';
import warning from '../../Assets/Icon/warning.svg';
import './ForecastView.css';

function ForecastView() {
  const [weatherInfo, setWeatherInfo] = useState('');
  const [isGeolocation, setGeolocationState] = useState(false);
  const [isError, setErrorState] = useState(false);

  const currentTime = () => {
    const hour = getHours(new Date());
    const minutes = getMinutes(new Date());

    return minutes.toString().length === 1 ? `${hour}:0${minutes}` : `${hour}:${minutes}`;
  };

  const [time, setTime] = useState(currentTime());

  const dayOfWeek = date => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[getISODay(date)];

    return day;
  };

  function success(pos) {
    const crd = pos.coords;
    const { latitude } = crd;
    const { longitude } = crd;

    getWeatherByCoordinates(latitude, longitude)
      .then(resp => {
        const { data } = resp;
        const listOfWeatherInfo = {
          city: data.name,
          temp: Math.round(data.main.temp),
          icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
          desc: `${data.weather[0].description} icon`
        };

        setWeatherInfo(listOfWeatherInfo);
      })
      .catch(() => {
        setErrorState(true);
      });

    setErrorState(false);

    setGeolocationState(true);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(currentTime());
    }, 6000);
    navigator.geolocation.getCurrentPosition(success);
    return () => {
      return clearInterval(timer);
    };
  }, [time]);

  return (
    <>
      {!isGeolocation && (
        <div className='forecast__container forecast__container--warning'>
          <img src={warning} alt='warning icon' />
          <p>You do not allow the location, please change it to use the weather forecast.</p>
        </div>
      )}
      {isGeolocation && (
        <div className='forecast__container'>
          {isError && (
            <>
              <div className='forecast__time-and-weather'>
                <p className='forecast__time'>{time}</p>
                <div className='forecast__weather'>
                  <img className='warning-icon' src={warning} alt='warning icon' />
                  <p className='warning-info'>No weather data</p>
                </div>
              </div>
            </>
          )}
          {!isError && (
            <>
              <h2 className='forecast__city'>{weatherInfo.city}</h2>
              <div className='forecast__time-and-weather'>
                <p className='forecast__time'>{time}</p>
                <div className='forecast__weather'>
                  <img className='weather-icon' src={weatherInfo.icon} alt={weatherInfo.desc} />
                  <p>{weatherInfo.temp}° C</p>
                </div>
              </div>
            </>
          )}
          <p className='forecast__date'>
            {`${format(new Date(), 'dd.MM.yyyy')} | ${dayOfWeek(new Date())}`}
          </p>
        </div>
      )}
    </>
  );
}

export default ForecastView;
