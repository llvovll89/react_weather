import React from 'react';
import './Bottom.css';

// icons
import {AiOutlineArrowUp , AiOutlineArrowDown} from 'react-icons/ai'
import { WiDayCloudy ,WiCloudy , WiDayRainWind , WiCelsius} from "react-icons/wi";


export const Bottom = ({ weather }) => {
  const items = [
    {
        id: 1,
        icon: <AiOutlineArrowUp />,
        text: '최고',
        degree : <WiCelsius />, 
        data: weather.temp_max.toFixed() - 273,
        unit: '°C' 
    },
    {
        id: 2,
        icon: <AiOutlineArrowDown />,
        text: '최저',
        degree : <WiCelsius />,
        data: weather.temp_min.toFixed() - 273,
        unit: '°C'
    },
    {
        id: 3,
        icon: <WiDayCloudy />,
        text: '체감 온도',
        degree : <WiCelsius />,
        data: weather.feels_like.toFixed() - 273,
        unit: '°C'
    },
    {
        id: 4,
        icon: <WiCloudy />,
        text: '압력',
        degree : <WiCelsius />,
        data: weather.pressure,
        unit: 'hPa'
    },
    {
        id: 5,
        icon: <WiDayRainWind />,
        text: '습도',
        degree : <WiCelsius />,
        data: weather.humidity,
        unit: '%',
    },
    {
        id: 6,
        icon: <WiDayRainWind />,
        text: '풍속',
        degree : <WiCelsius />,
        data: weather.speed.toFixed(),
        unit: "m/s"
    },
]

  return (
    <>
      <div className="section section_desc">
        <div className="card">  
          {items.map((item) => (
            <div className="card_content" key={item.id}>
              <span className="card_text">
                {item.icon} {item.text}
              </span>
                <h3>{`${item.data} ${item.unit}`}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
