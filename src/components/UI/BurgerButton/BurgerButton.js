import React from "react";
import classes from "./BurgerButton.module.scss";

const BurgerButton = props => {
  return (
    <div className={classes.BurgerButton}>
      {[1, 2, 3].map(_ => (
        <div className={classes.Line} />
      ))}
    </div>
  );
};

export default BurgerButton;
