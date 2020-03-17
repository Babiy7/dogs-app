import React from "react";
import classes from "./Category.module.scss";

const Category = props => {
  return (
    <div className={classes.Category}>
      <div>
        <img src={props.icon} alt="category" />
      </div>

      <h4 className={classes.Title}>{props.title}</h4>
    </div>
  );
};

export default Category;
