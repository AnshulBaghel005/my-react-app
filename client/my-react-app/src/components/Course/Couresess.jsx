import React from 'react';
import Card from './Card';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Couresess = ({free,paid}) => {
  

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  

  return (
    <div className='mt-10'>
    <div className="max-w-screen-2xl mx-auto px-4 md:px-20 py-8 space-y-10">
      <div className="slider-container ">
        <Slider {...settings}>
          {free.map((data, index) => (
            <div key={index} className="px-2">
              <Card data={data} />
            </div>
          ))}
        </Slider>
      </div>
       <div className="slider-container">
        <Slider {...settings}>
        {paid!=undefined&&paid.map((data, index) => (
            <div key={index} className="px-2">
              <Card data={data} />
            </div>
          ))}
      </Slider>
      </div>
    </div>
    </div>
  );
};

export default Couresess;
