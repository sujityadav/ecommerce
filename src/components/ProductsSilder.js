import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

export default function ProductsSilder() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 1500,
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
      title: "Fancy",
      imgUrl: "https://res.cloudinary.com/dnhwxgf8i/image/upload/c_scale,h_250,w_400/v1520532750/blue_dfokic.png",
    },
    {
      id: 2,
      title: "Patterns",
      imgUrl: "http://res.cloudinary.com/dnhwxgf8i/image/upload/c_scale,h_250,w_400/v1488011915/mockup1_ff4smb.jpg",
    },
    {
      id: 3,
      title: "Best of QLED TVs",
      imgUrl: "http://res.cloudinary.com/dnhwxgf8i/image/upload/c_scale,h_250,w_400/v1488011915/mockup2_dnfs2c.jpg",
    },
    {
      id: 4,
      title: "Best of QLED TVs",
      imgUrl: "http://res.cloudinary.com/dnhwxgf8i/image/upload/c_scale,h_250,w_400/v1520528305/table_n1bjhv.png",
    },
    {
      id: 5,
      title: "Best of QLED TVs",
      imgUrl: "http://res.cloudinary.com/dnhwxgf8i/image/upload/c_scale,h_250,w_400/v1520528305/house2_gs4cr6.png",
    },
    {
      id: 6,
      title: "Best of QLED TVs",
      imgUrl: "http://res.cloudinary.com/dnhwxgf8i/image/upload/c_scale,h_250,w_400/v1520529781/sofa_xlb0hz.png",
    },
    {
      id: 6,
      title: "Best of QLED TVs",
      imgUrl: "https://res.cloudinary.com/dnhwxgf8i/image/upload/c_scale,h_250,w_400/v1520532750/orange_hlsunx.png",
    },
    // Add more products as needed
  ];

  return (
    <>
      <div className="mt-[10px]">
        <div className="slider-container ">
          <Slider {...settings}>
            {ExploreBrandProducts.map(product => (
              <a href='' key={product.id} className=" ">
                <div className="relative px-2 ">
                  <img src={product.imgUrl} className="h-[210px] w-full " alt={product.title} />
                 
                  <div className="no-underline rounded-full text-grey-darker bg-[#f8f8f8] h-8 w-8 flex justify-center items-center absolute top-3 right-5">
                    <i className="pi pi-heart hover:text-red-dark"></i>
                  </div>
                  <div className="p-2 border rounded-b-lg ">
                  <h1 className="text-lg">
                  <a href='' className="no-underline hover:underline text-black">
                    {product.title}
                  </a>
                 
                </h1>
                </div>
                </div>

                
              </a>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
