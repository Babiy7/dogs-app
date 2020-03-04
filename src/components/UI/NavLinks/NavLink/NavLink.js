import React from "react";
import classes from "./NavLink.module.scss";

import { NavLink } from "react-router-dom";

const Link = props => {
  return (
    <NavLink
      exact={props.active ? true : false}
      className={classes.Link}
      to={props.link}
      activeClassName={classes.ActiveLink}
    >
      {props.children}
    </NavLink>
  );
};

export default Link;
