import React from "react";
import classes from "./NavLink.module.scss";

import { NavLink } from "react-router-dom";

const Link = props => {
  return (
    <NavLink
      exact={props.active ? true : false}
      className={[
        classes.Link,
        props.theme === "white" ? classes.Dark : ""
      ].join(" ")}
      to={props.link}
      activeClassName={classes.ActiveLink}
      onClick={props.clicked}
    >
      {props.children}
    </NavLink>
  );
};

export default Link;
