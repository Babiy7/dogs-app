import React from "react";
import classes from "./Friends.module.scss";

import dog1 from "../../../assests/pets/dog1.png";
import dog2 from "../../../assests/pets/dog2.png";
import dog3 from "../../../assests/pets/dog3.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Portfolio from "../../Portfolio/Portfolio";
import Button from "../../UI/Button/Button";

const Friends = props => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  return (
    <div className={classes.Friends}>
      <div className={classes.Container}>
        <h4 className={classes.Title}>
          Our friends who <br /> are looking for a house
        </h4>
        <div className={classes.Content}>
          <Slider {...settings}>
            <Portfolio />
            <Portfolio />
            <Portfolio />
            <Portfolio />
            <Portfolio />
            <Portfolio />
            {/* <img className={classes.Image} src={dog1} alt="" />
            <img className={classes.Image} src={dog2} alt="" />
            <img className={classes.Image} src={dog3} alt="" /> */}
          </Slider>
        </div>
        <div className={classes.ButtonContainer}>
          <Button type="main">Get to know the rest</Button>
        </div>
      </div>
    </div>
  );
};

export default Friends;
