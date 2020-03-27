import React, { useState } from "react";
import classes from "./Pagination.module.scss";

import Portfolio from "../../components/Portfolio/Portfolio";
import PaginationButtons from "../../components/UI/PaginationButtons/PaginationButtons";

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
  { id: "1ds", img: dog1, name: "Katrine" },
  { id: "2sa", img: dog2, name: "Jenifer" },
  { id: "3fs", img: dog3, name: "Woody" },
  { id: "4sa", img: dog4, name: "Sophia" },
  { id: "5se", img: dog5, name: "Timmy" },
  { id: "6sr", img: cat1, name: "Charly" },
  { id: "7gh", img: cat2, name: "Scarlett" },
  { id: "8hh", img: cat3, name: "Freddie" },
  { id: "1ds", img: dog1, name: "Katrine" },
  { id: "2sa", img: dog2, name: "Jenifer" },
  { id: "3fs", img: dog3, name: "Woody" },
  { id: "4sa", img: dog4, name: "Sophia" },
  { id: "5se", img: dog5, name: "Timmy" },
  { id: "6sr", img: cat1, name: "Charly" },
  { id: "7gh", img: cat2, name: "Scarlett" },
  { id: "8hh", img: cat3, name: "Freddie" },
  { id: "1ds", img: dog1, name: "Katrine" },
  { id: "2sa", img: dog2, name: "Jenifer" },
  { id: "3fs", img: dog3, name: "Woody" },
  { id: "4sa", img: dog4, name: "Sophia" },
  { id: "5se", img: dog5, name: "Timmy" },
  { id: "6sr", img: cat1, name: "Charly" },
  { id: "5se", img: dog5, name: "Timmy" },
  { id: "6sr", img: cat1, name: "Charly" },
  { id: "7gh", img: cat2, name: "Scarlett" },
  { id: "8hh", img: cat3, name: "Freddie" },
  { id: "7gh", img: cat2, name: "Scarlett" },
  { id: "8hh", img: cat3, name: "Freddie" },
  { id: "1ds", img: dog1, name: "Katrine" },
  { id: "2sa", img: dog2, name: "Jenifer" },
  { id: "3fs", img: dog3, name: "Woody" },
  { id: "4sa", img: dog4, name: "Sophia" },
  { id: "1ds", img: dog1, name: "Katrine" },
  { id: "2sa", img: dog2, name: "Jenifer" },
  { id: "3fs", img: dog3, name: "Woody" },
  { id: "4sa", img: dog4, name: "Sophia" },
  { id: "1ds", img: dog1, name: "Katrine" },
  { id: "2sa", img: dog2, name: "Jenifer" },
  { id: "3fs", img: dog3, name: "Woody" },
  { id: "4sa", img: dog4, name: "Sophia" },
  { id: "5se", img: dog5, name: "Timmy" },
  { id: "6sr", img: cat1, name: "Charly" },
  { id: "7gh", img: cat2, name: "Scarlett" },
  { id: "8hh", img: cat3, name: "Freddie" },
  { id: "6sr", img: cat1, name: "Charly" }
];

const Portfolios = ({ pets }) =>
  pets.map((pet, i) => <Portfolio key={i} image={pet.img} name={pet.name} />);

const Pagination = props => {
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [portfolioPerPage, setPortfolioPerPage] = useState(8);

  //Get number of buttons
  const indexOfButtons = Math.floor(pets.length / portfolioPerPage) + 1;

  //Get current portfolios for page
  const indexOfLastPortfolios = currentPage * portfolioPerPage;
  const indexOfFirstPortfolios = indexOfLastPortfolios - portfolioPerPage;

  //Get portfolios for page
  const petsPerPage = pets.slice(indexOfFirstPortfolios, indexOfLastPortfolios);

  const paginate = number => {
    setCurrentPage(number);
  };

  return (
    <section className={classes.Pagination}>
      <div className={classes.Container}>
        <div className={classes.TextContainer}>
          <h4 className={classes.Title}>
            Our friends who are looking for a house
          </h4>
        </div>

        <div className={classes.Portfolios}>
          <Portfolios pets={petsPerPage} />
        </div>

        <div className={classes.Buttons}>
          <PaginationButtons
            amountOf={indexOfButtons}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </section>
  );
};

export default Pagination;
