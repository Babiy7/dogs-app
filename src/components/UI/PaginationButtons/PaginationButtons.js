import React from "react";
import classes from "./PaginationButtons.module.scss";

import Button from "../Button/Button";

let left = [],
  right = [],
  middle = [];

const Buttons = (props) =>
  props.array.map((number) => (
    <Button
      key={number}
      number={props.currentPage === number}
      clicked={() => props.paginate(number)}
      type="pagination"
    >
      {number}
    </Button>
  ));

const Dots = (props) => [1, 2, 3].map((_) => <div className={classes.Dot} />);

const getButtons = (buttons, currentPage, half) => {
  if (currentPage >= half) {
    if (currentPage >= buttons.length - 2) {
      left = buttons.slice(0, 1);
      middle = [];
      right = buttons.slice(half - 1, buttons.length);
    } else {
      left = buttons.slice(0, 1);
      middle = buttons.slice(currentPage - 2, currentPage + 1);
      right = buttons.slice(buttons.length - 1);
    }
  } else {
    left = buttons.slice(0, half);
    middle = [];
    right = buttons.slice(buttons.length - 1);
  }
};

const PaginationButtons = ({ amountOf, paginate, currentPage }) => {
  const buttons = [];
  let half = 0;

  for (let i = 1; i <= amountOf; i++) {
    buttons.push(i);
  }

  half = Math.round(buttons.length / 2);

  getButtons(buttons, currentPage, half);

  return (
    <ul className={classes.ListButtons}>
      {middle.length > 0 ? (
        <>
          <Buttons array={left} paginate={paginate} currentPage={currentPage} />
          <Dots />
          <Buttons
            array={middle}
            paginate={paginate}
            currentPage={currentPage}
          />
          <Dots />
          <Buttons
            array={right}
            paginate={paginate}
            currentPage={currentPage}
          />
        </>
      ) : (
        <>
          <Buttons array={left} paginate={paginate} currentPage={currentPage} />
          <Dots />
          <Buttons
            array={right}
            paginate={paginate}
            currentPage={currentPage}
          />
        </>
      )}
    </ul>
  );
};

export default PaginationButtons;
