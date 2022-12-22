import React from 'react';
import './Header.css';
import navImg from '../../assets/image/contactimg.png';

// react-icons
import { TiWeatherCloudy } from 'react-icons/ti';
import { useState } from 'react';

export const Header = ({keydown , change , dark , title}) => {
  return (
    <>
      <header className="header">
        <div className="section section_input">
          <input type="text" name="city" placeholder="도시입력..." onKeyDown={keydown} onChange={change} />
          <button onClick={dark}>
          <TiWeatherCloudy /> {title}
          </button>
        </div>
      </header>
    </>
  );
};
