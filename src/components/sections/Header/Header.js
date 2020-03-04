import React from "react";
import classes from "./Header.module.scss";

import Logo from "../../UI/Logo/Logo";

const Header = props => {
  return (
    <div className={classes.Header}>
      <div className={classes.Container}>
        <Logo />
        <nav></nav>
      </div>
    </div>
  );
};

export default Header;
