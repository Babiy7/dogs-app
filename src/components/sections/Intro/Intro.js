import React from "react";
import classes from "./Intro.module.scss";

import dog from "../../../assests/image/logo512.png";

const Intro = () => {
  return (
    <div className={classes.Intro}>
      <div className={classes.Container}>
        <div className={classes.Left}>
          <div className={classes.Title}></div>
          <div className={classes.Text}></div>
        </div>

        <div className={classes.Right}>
          <img src={dog} alt="dog" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
