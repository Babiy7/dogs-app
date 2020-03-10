import React from "react";
import classes from "./Friends.module.scss";

import dog1 from "../../../assests/pets/dog1.png";
import dog2 from "../../../assests/pets/dog2.png";
import dog3 from "../../../assests/pets/dog3.png";

import Portfolio from "../../Portfolio/Portfolio";
import Button from "../../UI/Button/Button";
import Slider from "../../Slider/Slider";

const Friends = props => {
  return (
    <div className={classes.Friends}>
      <div className={classes.Container}>
        <h4 className={classes.Title}>
          Our friends who <br /> are looking for a house
        </h4>
        <div className={classes.Content}>
          <Slider />
        </div>
        <div className={classes.ButtonContainer}>
          <Button type="main">Get to know the rest</Button>
        </div>
      </div>
    </div>
  );
};

export default Friends;
