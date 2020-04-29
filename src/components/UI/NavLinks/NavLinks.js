import React from "react";
import NavLink from "./NavLink/NavLink";

import { connect } from "react-redux";
import { WHITE_THEME, DARK_THEME } from "../../../redux/actionTypes";

const NavLinks = props => {
  const action = { type: WHITE_THEME };
  const theme = props.theme;

  return (
    <>
      <NavLink
        link="/"
        theme={theme}
        active={true}
        clicked={() => props.changeTheme({ type: DARK_THEME })}
      >
        Home
      </NavLink>
      <NavLink
        link="/pets"
        theme={theme}
        clicked={() => props.changeTheme(action)}
      >
        Our pets
      </NavLink>
      <NavLink
        link="/shelter"
        theme={theme}
        clicked={() => props.changeTheme(action)}
      >
        To help the shelter
      </NavLink>
      <NavLink
        link="/contacts"
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
