import React from "react";
import classes from "./Friends.module.scss";

import Portfolio from "../../Portfolio/Portfolio";
import Button from "../../UI/Button/Button";

const Friends = props => {
  return (
    <div className={classes.Friends}>
      <div className={classes.Container}>
        <h4 className={classes.Title}>
          Our friends who <br /> are looking for a house
        </h4>
        <div className={classes.Content}>
          <Portfolio />
        </div>
        <div className={classes.ButtonContainer}>
          <Button type="main">Get to know the rest</Button>
        </div>
      </div>
    </div>
  );
};

export default Friends;
