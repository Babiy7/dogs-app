import React, { Component } from "react";
import classes from "./Slider.module.scss";

import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

import Portfolio from "../Portfolio/Portfolio";
import Button from "../UI/Button/Button";
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
  { id: "8hh", img: cat3, name: "Freddie" },
];

class MySlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {
    const slides = pets.map((pet, index) => (
      <div className={classes.Slide} key={index}>
        <Portfolio
          image={pet.img}
          name={pet.name}
          handleClick={this.props.handleClick}
        />
      </div>
    ));

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };

    return (
      <div className={classes.Slider}>
        <div className={classes.Container}>
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            {slides}
          </Slider>
        </div>
        <div className={classes.Left}>
          <Button type="previous" clicked={() => this.previous()} />
        </div>

        <div className={classes.Right}>
          <Button type="next" clicked={() => this.next()} />
        </div>
      </div>
    );
  }
}

export default MySlider;
