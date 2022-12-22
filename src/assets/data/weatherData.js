// import axios from 'axios';
const API_KEY = '403ab7220f45d2c5074c471d2bfd07e2';

const iconURL = (id) => `https://openweathermap.org/img/wn/${id}@2x.png`;
// const API_KEY = process.env.REACT_APP_API_KEY;


const getWeatherData = async (city, unit = 'metric') => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}}`;

  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

  const {
    weather,
    main: { temp, pressure, temp_max, temp_min, humidity, feels_like },
    wind: { speed },
    sys: { country },
    name,
  } = data;

  const { description, icon } = weather[0];

  return {
    description,
    iconURL: iconURL(icon),
    temp,
    pressure,
    temp_max,
    temp_min,
    humidity,
    feels_like,
    speed,
    country,
    name,
  };
};

export { getWeatherData };
