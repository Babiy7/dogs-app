import React from "react";
import classes from "./Addition.module.scss";

import dog from "../../../assests/images/dog-addition.png";
import CreditCard from "../../../assests/icons/credit-card.png";

const Addition = () => {
  return (
    <div className={classes.Addition}>
      <div className={classes.Container}>
        <div className={classes.ImageContainer}>
          <img className={classes.Image} src={dog} alt="" />
        </div>

        <div className={classes.Content}>
          <h4 className={classes.Title}>
            In addition, you <br /> can make a donation
          </h4>

          <div className={classes.CreditCardContainer}>
            <div className={classes.CreditCardTitle}>
              Name of the bank / Type of bank account
            </div>

            <div className={classes.CreditCardContent}>
              <img className={classes.ImageCard} src={CreditCard} alt="" />
              <h4 className={classes.CreditCard}>8380 2880 8028 8791 7435</h4>
            </div>
          </div>

          <div className={classes.Text}>
            <p>
              Legal information and lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed
              ac diam. Praesent ultrices maximus tortor et vulputate. Interdum
              et malesuada fames ac ante ipsum primis in faucibus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addition;
