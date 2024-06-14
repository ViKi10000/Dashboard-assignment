import React from "react";
import "./nav.css";
import NavSettings from "./NavSettings";
import NavProfile from "./NavProfile";
import NavNotice from "./NavNotice";
import NavMenu from "./NavMenu";

function Nav() {
  return (
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        <NavSettings />
        <NavNotice />
        <NavMenu />
        <NavProfile />
      </ul>
    </nav>
  );
}

export default Nav;
