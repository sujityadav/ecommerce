import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

export default function ExploreBrandSilder() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 1000,
    pauseOnHover: true,
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

  const ExploreBrandProducts = [
    {
      id: 1,
      offers: "Best of QLED TVs",
      imgUrl: "https://upload.wikimedia.org/wikipedia/en/f/f1/Accurist_logo.png",
    },
    {
      id: 2,
      offers: "Best of QLED TVs",
      imgUrl: "https://1000logos.net/wp-content/uploads/2017/08/Michael-Kors-symbol.jpg",
    },
    {
      id: 3,
      offers: "Best of QLED TVs",
      imgUrl: "https://i.pinimg.com/originals/51/be/db/51bedb88534a8e37f1d9c46554b2b592.jpg",
    },
    {
      id: 4,
      offers: "Best of QLED TVs",
      imgUrl: "https://helenkirchhofer.ch/media/catalog/category/brand-logo-armani-exchange.png",
    },
    {
      id: 5,
      offers: "Best of QLED TVs",
      imgUrl: "https://i.pinimg.com/originals/d3/d1/b8/d3d1b872371d85ced2bc9660b728db10.jpg",
    },
    // Add more products as needed
  ];

  return (
    <>
      <div className="mt-[10px]">
        <div className="slider-container">
          <Slider {...settings}>
            {ExploreBrandProducts.map(product => (
              <div key={product.id}>
                <div className="relative px-2">
                  <img src={product.imgUrl} className="h-[120px] w-full rounded-t-lg" alt={product.offers} />
                  <div className="py-3 px-3 brand-gradient rounded-b-lg">
                    <div className="flex justify-between items-center text-[#333] font-semibold">
                      {product.offers}
                      <Link to="" className="pr-2">
                        <i className="pi pi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
