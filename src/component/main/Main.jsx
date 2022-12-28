import React, { useState, useEffect } from 'react';
import { getWeatherData } from '../../assets/data/weatherData';
import { Bottom } from '../bottom/Bottom';
import { Form } from '../form/Form';
import { Header } from '../header/Header';
// import AOS from 'aos';

export const Main = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('daegu');
  const [darkmode , setDarkMode] = useState(false);

  const handelClick = () => {
    setDarkMode(!darkmode)
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWeatherData(city);
      setWeather(data);
    };
    fetchData();
  }, [city]);

  const enterCLick = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
    }
  }

  return (
    <>
      <div className="main">
        <div className="overlay">
          {weather && (
            <div className={darkmode ? "container dark" : "container"}>
              <Header keydown={enterCLick} dark={handelClick} title={darkmode ? "DARK" : "WHITE"}/>
              <Form
                name={weather.name}
                country={weather.country}
                imgurl={weather.iconURL}
                desc={weather.description}
                temp={weather.temp}
              />
              <Bottom weather={weather}/>
            </div>
          )}
        </div>
      </div>
    </>
  );
}