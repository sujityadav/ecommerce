// ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
const ExploreBrandCard = ({product}) => (
  <div className="slider-container">
  <Slider {...settings}>
    <div>
    <div className="relative">
                   <img  src={product.imgUrl} className="h-[120px] w-full rounded-t-lg" />
                   <div className="py-3 px-3 brand-gradient rounded-b-lg">
                    <div className="flex justify-between items-center text-[#333] font-semibold">
                    {product.offers}

                      <Link to='' className="pr-2"><i className="pi pi-arrow-right"></i></Link>
                    </div>
                   </div>
                </div>
    </div>
   
   
  </Slider>
</div>

   
);

export default ExploreBrandCard;
