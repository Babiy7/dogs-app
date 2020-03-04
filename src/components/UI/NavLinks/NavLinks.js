import React from "react";
import NavLink from "./NavLink/NavLink";

const NavLinks = props => {
  return [
    { title: "Home", link: "/", active: true },
    { title: "About the shelter", link: "/about", active: true },
    { title: "Our pets", link: "/pets", active: false },
    { title: "To help the shelter", link: "/page", active: false },
    { title: "Contacts", link: "/pats", active: false }
  ].map(navLink => (
    <NavLink link={navLink.link} active={navLink.active}>
      {navLink.title}
    </NavLink>
  ));
};

export default NavLinks;
