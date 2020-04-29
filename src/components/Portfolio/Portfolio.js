import React, { memo } from "react";
import classes from "./Portfolio.module.scss";

import Button from "../UI/Button/Button";

const Portfolio = props => {
  return (
    <div
      className={[classes.Portfolio, !props.shadow || classes.Center].join(" ")}
    >
      <img className={classes.Image} src={props.image} alt="pet" />

      <div className={classes.Content}>
        <h4 className={classes.Title}>{props.name}</h4>

        <div className={classes.ButtonContainer}>
          <Button
            type="main"
            clicked={() =>
              props.handleClick({ name: props.name, img: props.image })
            }
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

function areEqual(prevProps, nextProps) {
  return prevProps.name === nextProps.name;
}

export default memo(Portfolio, areEqual);
