import React from "react";
import classes from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <h3 className={classes.Title}>Cozy House</h3>
      <div className={classes.Subtitle}>Shelter for pets in Boston</div>
    </div>
  );
};

export default Logo;
