import React from "react";
import classes from "./Showcase.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Showcase() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div>
          <h1> Get your Home Easily!</h1>
        </div>
        <Slider {...settings}>
          <div>
            <img
              src="/images/exterior_1.jpeg"
              alt="img"
              className={classes.image}
            />
          </div>
          <div>
            <img
              src="/images/exterior_1.jpeg"
              alt="img"
              className={classes.image}
            />
          </div>
          <div>
            <img
              src="/images/exterior_1.jpeg"
              alt="img"
              className={classes.image}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Showcase;
