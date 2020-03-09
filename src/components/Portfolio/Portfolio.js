import React from "react";
import classes from "./Portfolio.module.scss";

import dog from "../../assests/pets/dog1.png";
import dog2 from "../../assests/pets/dog2.png";

import Button from "../UI/Button/Button";

const Portfolio = () => {
  return (
    <div className={classes.Portfolio}>
      <div className={classes.ImageContainer}>
        <img className={classes.Image} src={dog2} alt="pet" />
      </div>
      <div className={classes.Content}>
        <h4 className={classes.Title}>Jennifer</h4>
        <div className={classes.ButtonContainer}>
          <Button type="main">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
