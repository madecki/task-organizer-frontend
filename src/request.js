import axios from 'axios';

export const getWeatherByCoordinates = (latitude, longitude) =>
  axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
  );
