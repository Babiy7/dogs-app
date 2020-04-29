import React from "react";
import classes from "./Backdrop.module.scss";

const Backdrop = props => {
  return (
    <div
      className={classes.Backdrop}
      style={{
        zIndex: props.show ? "19" : "-2",
        opacity: props.show ? "1" : "0"
      }}
      onClick={props.unShow}
    />
  );
};

export default Backdrop;
