import React from "react";
import classes from "./Header.module.scss";

import Logo from "../../UI/Logo/Logo";
import Links from "../../UI/NavLinks/NavLinks";
import BurgerButton from "../../UI/BurgerButton/BurgerButton";

const Header = props => {
  return (
    <div className={classes.Header}>
      <div className={classes.Container}>
        <Logo />

        <nav className={classes.Navigation}>
          <Links />
        </nav>

        <BurgerButton />
      </div>
    </div>
  );
};

export default Header;
