import React from 'react'
import { useState } from 'react'
import { SliderData } from './SliderData'
import {BsFillCaretLeftFill, BsFillCaretRightFill} from "react-icons/bs"
import img1 from "./img/header.jpg"

const ImageSlider = ({slides}) => {
  const [Current, setCurrent]=useState(0)
  const length=slides.length;

  const nextSlide =() =>{
    setCurrent(Current === length -1 ? 0 : Current +1)
  }
  const prevSlide =() =>{
    setCurrent(Current === 0 ? length -1: Current -1)
  }

  console.log(Current)

  if(!Array.isArray(slides) || slides.length<= 0){
    return null
  }
  return (
    <section className='slider'>
      <BsFillCaretLeftFill className='left-arrow' onClick={prevSlide}/>
      <BsFillCaretRightFill className='right-arrow' onClick={nextSlide}/>



    {SliderData.map((Slide, index)=>{
      return(
        <div className={index === Current ? "slide active" : "slide" } key={index}>
          {index === Current && (<img src={Slide.image} alt="hotels photo"  className="image" height="600" width="1470"/>
)
          }
        </div>

      )

    })}
      
    </section>
  )
}

export default ImageSlider
