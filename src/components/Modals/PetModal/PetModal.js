import React from "react";
import classes from "./PetModal.module.scss";

import dog from "../../../assests/pets/dog3.png";

const charcteristic = {
  age: "4 months",
  inoculations: "none",
  diseases: "none",
  parasites: "none"
};

const PetModal = props => {
  const pets = Object.entries(charcteristic).map(item => (
    <li className={classes.Item}>
      <span className={classes.Key}>{item[0]}: </span> {item[1]}
    </li>
  ));

  return (
    <div className={classes.PetModal}>
      <div className={classes.Left}>
        <img className={classes.Image} src={dog} alt="" />
      </div>
      <div className={classes.Right}>
        <h4 className={classes.Title}>Charly</h4>
        <div className={classes.SubTitle}>Pooch</div>
        <div className={classes.Text}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero nobis
            sint voluptatum necessitatibus consequatur quis commodi? Excepturi
            autem mollitia eius nesciunt, ab aspernatur temporibus adipisci
            nulla esse deserunt soluta cumque!
          </p>
        </div>

        <ul className={classes.Сharacteristic}>{pets}</ul>
      </div>
    </div>
  );
};

export default PetModal;