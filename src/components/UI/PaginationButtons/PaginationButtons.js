import React from "react";
import classes from "./PaginationButtons.module.scss";

import Button from "../Button/Button";

const PaginationButtons = ({ amountOf, paginate }) => {
  const buttons = [];

  for (let i = 1; i <= amountOf; i++) {
    buttons.push(i);
  }

  const firstBtn = buttons[0];
  const lastBtn = buttons.length;

  console.log(firstBtn, lastBtn);

  return (
    <ul className={classes.ListButtons}>
      {buttons.map(number => (
        <Button key={number} clicked={() => paginate(number)} type="pagination">
          {number}
        </Button>
      ))}
    </ul>
  );
};

export default PaginationButtons;
