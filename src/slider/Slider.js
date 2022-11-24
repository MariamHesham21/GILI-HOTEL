import React from 'react';
import { useState } from 'react';
import "./Slider.css";
import {dataSlider} from "./SliderData"
import { Link } from "react-router-dom";




const Slider = () => {
  return (
    <div className='container-slider'>
      <div className='slider-text'>
        <h4>STAY AT Gili Lankanfushi HOTEL MYKONOS</h4>
        <h2>YOUR BEACHFRONT OASIS OF RELAXATION</h2>
        <p>Situated at a superb location,a few steps from the famous long sandy beachs and a short drive from Mykonos Town.<br/>
        Our hotel is an exclusive haven for relaxation, offering comfortable suites and apartments in modern Cycladic style, luxurious facilities and high quality services.
        </p>
        <Link to="/ABOUT">
        <button type="button" className="nav-btn" id="about">more</button>
        </Link>
      </div>
    </div>
  )
}

export default Slider