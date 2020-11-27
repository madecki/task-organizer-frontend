import axios from 'axios';

const apiAddress = 'https://api.openweathermap.org/data/2.5/weather?';

const getWeatherByCoordinates = (lat, lon) => {
  return axios.get(
    `${apiAddress}lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
  );
};

export default getWeatherByCoordinates;
