import React from "react";
import classes from "./Header.module.scss";

import { connect } from "react-redux";

import Logo from "../../UI/Logo/Logo";
import Links from "../../UI/NavLinks/NavLinks";
import BurgerButton from "../../UI/BurgerButton/BurgerButton";

const Header = props => {
  return (
    <div
      className={[
        classes.Header,
        props.theme === "white" ? classes.White : ""
      ].join(" ")}
    >
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

const mapStateToProps = state => ({
  theme: state.theme
});

const mapDispatchToProps = {};

export default connect(mapStateToProps)(Header);
