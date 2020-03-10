import React, { useState } from "react";
import classes from "./Slider.module.scss";

import Portfolio from "../Portfolio/Portfolio";

const Slider = () => {
  const slides = [1, 2, 3, 4, 5];
  const [x, setX] = useState(0);
  const [center, setCenter] = useState(1);

  const goLeft = () => {
    if (0 === x) {
      setX(-390 * (slides.length - 3));
      setCenter(slides.length - 2);
    } else {
      setX(x + 390);
      setCenter(center - 1);
    }
  };

  const goRight = () => {
    if (-390 * (slides.length - 3) === x) {
      setX(0);
      setCenter(1);
    } else {
      setX(x - 390);
      setCenter(center + 1);
    }
  };

  return (
    <div className={classes.Slider}>
      {slides.map((slide, index) => (
        <div
          className={classes.Slide}
          key={index}
          style={{
            transform: `translateX(${x}px)`,
            height: index === center ? "465px" : "445px"
          }}
        >
          <Portfolio shadow={index === center ? true : false} />
        </div>
      ))}

      <button className={classes.Left} onClick={() => goLeft()}>
        left
      </button>

      <button className={classes.Right} onClick={() => goRight()}>
        right
      </button>
    </div>
  );
};

export default Slider;
