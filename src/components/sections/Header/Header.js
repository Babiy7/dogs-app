import React from "react";
import classes from "./Header.module.scss";

import Logo from "../../UI/Logo/Logo";
import Links from "../../UI/NavLinks/NavLinks";

const Header = props => {
  return (
    <div className={classes.Header}>
      <div className={classes.Container}>
        <Logo />

        <nav className={classes.Navigation}>
          <Links />
        </nav>

        <div className={classes.BurgerButton}>
          {[1, 2, 3].map(_ => (
            <div className={classes.Line} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
