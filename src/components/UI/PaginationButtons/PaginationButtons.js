import React from "react";
import classes from "./PaginationButtons.module.scss";

import Button from "../Button/Button";

const PaginationButtons = ({ amountOf, paginate, currentPage }) => {
  const buttons = [];

  for (let i = 1; i <= amountOf; i++) {
    buttons.push(i);
  }

  return (
    <ul className={classes.ListButtons}>
      {buttons.map(number => (
        <Button
          key={number}
          number={currentPage === number}
          clicked={() => paginate(number)}
          type="pagination"
        >
          {number}
        </Button>
      ))}
    </ul>
  );
};

export default PaginationButtons;
