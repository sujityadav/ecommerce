import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import  silder1  from "../assets/images/silder1.png";
import  silder2  from "../assets/images/silder2.png";
import  silder3  from "../assets/images/silder3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";


export default function Banner(){

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      speed: 800,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
           
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
    <>
    <div className="mt-[10px]">
     <div className="slider-container">
      <Slider {...settings}>
        <div>
         <img src={silder1} height={300} className="w-full"/>
        </div>
        <div>
        <img src={silder2} height={300} className="w-full"/>
        </div>
        <div>
        <img src={silder3} height={300} className="w-full"/>
        </div>
       
      </Slider>
    </div>
    </div>
    </>
  );
}