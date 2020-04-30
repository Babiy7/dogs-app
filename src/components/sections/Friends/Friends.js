import React, { useState } from "react";
import classes from "./Friends.module.scss";

import Button from "../../UI/Button/Button";
import Slider from "../../Slider/Slider";
import Modal from "../../UI/Modal/Modal";
import { Context } from "../../../context/context";

const Friends = (props) => {
  const [state, setState] = useState({
    open: false,
    pet: null,
  });

  function handleClick(pet) {
    setState({ open: !state.open, pet: pet });
  }

  return (
    <>
      <div className={classes.Friends}>
        <div className={classes.Container}>
          <h4 className={classes.Title}>
            Our friends who <br /> are looking for a house
          </h4>

          <div className={classes.Content}>
            <Slider handleClick={handleClick} />
          </div>

          <div className={classes.ButtonContainer}>
            <Button type="main">Get to know the rest</Button>
          </div>
        </div>
      </div>

      <Context.Provider value={{ pet: state.pet }}>
        <Modal
          show={state.open}
          unShow={() => setState({ open: !state.open })}
        />
      </Context.Provider>
    </>
  );
};

export default Friends;
