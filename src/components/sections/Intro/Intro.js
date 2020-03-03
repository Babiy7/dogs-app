import React from "react";
import classes from "./Intro.module.scss";

import dog from "../../../assests/images/dog.png";

const Intro = () => {
  return (
    <div className={classes.Intro}>
      <div className={classes.Container}>
        <div className={classes.Left}>
          <h2 className={classes.Title}>Not only people need a house</h2>
          <div className={classes.Text}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
              aut neque reiciendis illum, quo saepe numquam. Repudiandae, beatae
              nemo. Enim suscipit quod, possimus consequatur ea mollitia quaerat
              et unde fuga.
            </p>
          </div>
          <div className={classes.ButtonContainer}></div>
        </div>
        <div className={classes.Right}>
          <img className={classes.Image} src={dog} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
