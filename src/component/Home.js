import React from 'react'
import Navbar from './Navbar'
import { Link } from "react-router-dom";
import Slider from '../slider/Slider';
import ImageSlider from '../slider/imageSlider';
import SliderHotels from '../slider/SliderHotels';
import ResSlider from '../slider/ResSlider';
import Footer from './Footer';



import { SliderData } from '../slider/SliderData';



const Home = () => {

  return (
    <div className='home-page'>
       <ImageSlider slides={SliderData}/>
       <Slider/>
       <SliderHotels/>
       <ResSlider/>
       <Footer/>
    </div>
  )
}

export default Home
