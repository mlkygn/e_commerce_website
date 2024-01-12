import React from "react";
import FlashCard from "./FlashCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FlashDeals({ productItems }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="bg-light py-4">
        <div className="container">
        <h2>Flash Deals</h2>
          <Slider {...settings}>
            {productItems.map((item, index) => (
              <FlashCard key={item.id} item={item} />
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}

export default FlashDeals;
