import React from "react";
import Slider from "react-slick";
import Sdata from "./Sdata";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from "./SliderCard";

function SliderComponts() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        {Sdata.map((item, i) => {
          return (
            <SliderCard item={item}/>
          );
        })}
      </Slider>
    </>
  );
}

export default SliderComponts;
