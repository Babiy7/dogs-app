import React from "react";
import NavLink from "./NavLink/NavLink";

import { connect } from "react-redux";
import { WHITE_THEME, DARK_THEME } from "../../../redux/actionTypes";

const NavLinks = props => {
  const theme = { type: DARK_THEME };
  // [
  //   { title: "Home", link: "/", active: true },
  //   { title: "About the shelter", link: "/about", active: true },
  //   {
  //     title: "Our pets",
  //     link: "/pets",
  //     active: false,
  //     changeTheme: () => {
  //       console.log("change");
  //       props.changeTheme();
  //     }
  //   },
  //   { title: "To help the shelter", link: "/page", active: false },
  //   { title: "Contacts", link: "/pats", active: false }
  // ].map((navLink, index) => (
  //   <NavLink
  //     key={index}
  //     link={navLink.link}
  //     active={navLink.active}
  //     changeTheme={() => navLink.changeTheme()}
  //   >
  //     {navLink.title}
  //   </NavLink>
  // ));

  return (
    <>
      <NavLink link="/" active={true} clicked={() => props.changeTheme(theme)}>
        Home
      </NavLink>
      <NavLink
        link="/pets"
        clicked={() => props.changeTheme({ type: WHITE_THEME })}
      >
        Our pets
      </NavLink>
      <NavLink link="/page" clicked={() => props.changeTheme(theme)}>
        To help the shelter
      </NavLink>
      <NavLink link="/pats" clicked={() => props.changeTheme(theme)}>
        Contacts
      </NavLink>
      ;
    </>
  );
};

const mapStateToProps = state => ({ theme: state.theme });

const mapDispatchToProps = dispatch => {
  return { changeTheme: theme => dispatch(theme) };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavLinks);
