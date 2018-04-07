import React, { Component } from 'react';
import './index.css';
import { HOME_MENU } from './constants';

export const Home = () => {
  return (

    <div className="Home">
      {
        HOME_MENU.map((option) => <div className='Home-Options'> {option} </div>)
      }
    </div>
  );
};

