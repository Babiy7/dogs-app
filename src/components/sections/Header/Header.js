import React from "react";
import classes from "./Header.module.scss";

import Logo from "../../UI/Logo/Logo";
import Links from "../../UI/NavLinks/NavLinks";

const Header = props => {
  return (
    <div className={classes.Header}>
      <div className={classes.Container}>
        <Logo />
        <nav>
          <Links />
        </nav>
      </div>
    </div>
  );
};

export default Header;
