import React, { useState } from "react";
import classes from "./Slider.module.scss";

import Portfolio from "../Portfolio/Portfolio";
import dog1 from "../../assests/pets/dog1.png";
import dog2 from "../../assests/pets/dog2.png";
import dog3 from "../../assests/pets/dog3.png";
import dog4 from "../../assests/pets/dog4.png";
import dog5 from "../../assests/pets/dog5.png";
import cat1 from "../../assests/pets/cat1.png";
import cat2 from "../../assests/pets/cat2.png";
import cat3 from "../../assests/pets/cat3.png";

const pets = [
  { id: "1ds", img: dog1, name: "Katrine" },
  { id: "2sa", img: dog2, name: "Jenifer" },
  { id: "3fs", img: dog3, name: "Woody" },
  { id: "4sa", img: dog4, name: "Sophia" },
  { id: "5se", img: dog5, name: "Timmy" },
  { id: "6sr", img: cat1, name: "Charly" },
  { id: "7gh", img: cat2, name: "Scarlett" },
  { id: "8hh", img: cat3, name: "Freddie" }
];

const Slider = () => {
  const slides = [1, 2, 3, 4, 5];
  const [x, setX] = useState(0);
  const [center, setCenter] = useState(1);

  console.log(center);

  const goLeft = () => {
    if (0 === x) {
      setX(-390 * (pets.length - 3));
      setCenter(pets.length - 2);
    } else {
      setX(x + 390);
      setCenter(center - 1);
    }
  };

  const goRight = () => {
    if (-390 * (pets.length - 3) === x) {
      setX(0);
      setCenter(1);
    } else {
      setX(x - 390);
      setCenter(center + 1);
    }
  };

  return (
    <div className={classes.Slider}>
      {pets.map((pet, index) => (
        <div
          className={classes.Slide}
          key={index}
          style={{
            transform: `translateX(${x}px)`,
            height: index === center ? "485px" : "445px"
          }}
        >
          <Portfolio
            image={pet.img}
            name={pet.name}
            shadow={index === center ? true : false}
          />
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
