import React from "react";
import classes from "./Modal.module.scss";

const Modal = props => {
  return (
    <>
      <div
        style={{
          // transform: props.show
          //   ? "translate(-50%, -50%)"
          //   : "translate(-50%, -100vh)",
          opacity: props.show ? "1" : "0",
          zIndex: props.show ? "20" : "-1"
        }}
        className={classes.Modal}
      >
        <button onClick={props.unShow} className={classes.Button} />
      </div>
    </>
  );
};

export default Modal;
