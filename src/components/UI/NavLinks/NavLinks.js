import React from "react";
import NavLink from "./NavLink/NavLink";

import { connect } from "react-redux";
import { WHITE_THEME, DARK_THEME } from "../../../redux/actionTypes";

const NavLinks = props => {
  const action = { type: DARK_THEME };
  const theme = props.theme;

  return (
    <>
      <NavLink
        link="/"
        theme={theme}
        active={true}
        clicked={() => props.changeTheme(action)}
      >
        Home
      </NavLink>
      <NavLink
        link="/pets"
        theme={theme}
        clicked={() => props.changeTheme({ type: WHITE_THEME })}
      >
        Our pets
      </NavLink>
      <NavLink
        link="/page"
        theme={theme}
        clicked={() => props.changeTheme(action)}
      >
        To help the shelter
      </NavLink>
      <NavLink
        link="/pats"
        theme={theme}
        clicked={() => props.changeTheme(action)}
      >
        Contacts
      </NavLink>
    </>
  );
};

const mapStateToProps = state => ({ theme: state.theme });

const mapDispatchToProps = dispatch => {
  return { changeTheme: theme => dispatch(theme) };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavLinks);
