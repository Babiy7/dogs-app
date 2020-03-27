import React from "react";
import classes from "./Button.module.scss";

const Button = props => {
  let button;

  switch (props.type) {
    case "main": {
      button = [classes.Button, classes.Main].join(" ");
      break;
    }

    case "previous": {
      button = [classes.Previous, classes.SliderButton].join(" ");
      break;
    }

    case "next": {
      button = [classes.SliderButton, classes.Next].join(" ");
      break;
    }

    case "pagination": {
      button = classes.SliderButton;
      break;
    }

    default: {
      button = classes.Button;
    }
  }
  return (
    <button className={button} onClick={props.clicked}>
      {props.children}
    </button>
  );
};

export default Button;
