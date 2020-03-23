import React, { memo, useContext } from "react";
import classes from "./Portfolio.module.scss";

import Button from "../UI/Button/Button";
import { Context } from "../../context/context";

const Portfolio = props => {
  const context = useContext(Context);
  return (
    <div
      className={[classes.Portfolio, props.shadow ? classes.Center : ""].join(
        " "
      )}
    >
      <img className={classes.Image} src={props.image} alt="pet" />

      <div className={classes.Content}>
        <h4 className={classes.Title}>{props.name}</h4>

        <div className={classes.ButtonContainer}>
          <Button
            type="main"
            clicked={() =>
              context.handleClick({ name: props.name, img: props.image })
            }
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(Portfolio);
