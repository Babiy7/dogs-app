import React from "react";
import classes from "./Button.module.scss";

const Button = props => {
  let button;

  switch (props.type) {
    case "normal": {
      button = classes.Button;
      break;
    }
    case "main": {
      button = [classes.Button, classes.Main].join(" ");
      break;
    }
    default: {
      button = classes.Button;
    }
  }
  return <button className={button}>{props.children}</button>;
};

export default Button;
