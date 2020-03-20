import React from "react";
import classes from "./Modal.module.scss";

import Backdrop from "../Backdrop/Backdrop";

const Modal = props => {
  const show = props.show;
  const unShow = props.unShow;

  return (
    <>
      <Backdrop show={show} unShow={unShow} />
      <div
        style={{
          opacity: show ? "1" : "0",
          zIndex: show ? "20" : "-1"
        }}
        className={classes.Modal}
      >
        <button onClick={unShow} className={classes.Button} />
      </div>
    </>
  );
};

export default Modal;
