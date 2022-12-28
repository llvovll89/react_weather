import React from 'react';
import './Header.css';
// react-icons
import { TiWeatherCloudy } from 'react-icons/ti';

export const Header = ({keydown , dark , title}) => {
  return (
    <>
      <header className="header">
        <div className="section section_input">
          <input type="text" name="city" placeholder="도시입력..." onKeyDown={keydown}  />
          <button onClick={dark}>
          <TiWeatherCloudy /> {title}
          </button>
        </div>
      </header>
    </>
  );
};
