import React from "react";
import classes from "./Button.module.scss";

const Button = ({ type, number, children, clicked }) => {
  let button;

  switch (type) {
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
      button = [classes.SliderButton, number ? classes.Hover : ""].join(" ");
      break;
    }

    default: {
      button = classes.Button;
    }
  }
  return (
    <button className={button} onClick={clicked}>
      {children}
    </button>
  );
};

export default Button;
