import React from "react";
import NavLink from "./NavLink/NavLink";

const NavLinks = props => {
  return [
    { title: "About the shelter", link: "/", active: true },
    { title: "Our pets", link: "/pets", active: false },
    { title: "To help the shelter", link: "/", active: false },
    { title: "Contacts", link: "/", active: false }
  ].map(navLink => (
    <NavLink link={navLink.link} active={navLink.active}>
      {navLink.title}
    </NavLink>
  ));
};

export default NavLinks;
