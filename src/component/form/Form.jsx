import React  from 'react';
import './Form.css';
// import logoPng from '../../assets/image/logo.png';

export const Form = ({name , country , imgurl , desc , temp }) => {
  return (
    <>
      <div className="section section_temp">
        <div className="temp_left">
          <h3>{`${name} , ${country}`}</h3>
          <img src={imgurl} alt="logo" />
          <span>{desc}</span>
        </div>
        <div className="temp_right">
          <h1>{`${temp.toFixed()-273}`}<span className='small'> °C</span></h1>
        </div>
      </div>
    </>
  );
};
