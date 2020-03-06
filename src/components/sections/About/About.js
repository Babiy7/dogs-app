import React from "react";
import classes from "./About.module.scss";

import pets from "../../../assests/images/Pets.png";

const About = props => {
  return (
    <div className={classes.About}>
      <div className={classes.Container}>
        <div className={classes.ImageContainer}>
          <img className={classes.Image} src={pets} alt="pets" />
        </div>

        <div className={classes.Content}>
          <h4 className={classes.Title}>About the shelter “Cozy House”</h4>

          <div className={classes.Text}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              modi! Error sit impedit, aspernatur odit temporibus maxime
              perferendis quam, minima deserunt expedita harum modi laboriosam
              tempora cupiditate voluptatibus ex vero!
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              laudantium, nam eius qui dicta quaerat similique dolores aliquam
              ipsa, esse repellendus aut nemo tempora dignissimos debitis
              architecto. Eos, fugiat quisquam?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
