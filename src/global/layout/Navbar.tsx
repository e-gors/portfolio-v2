import React from "react";
import Logo from "../assets/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import WorkIcon from "@mui/icons-material/Work";
import StarIcon from "@mui/icons-material/Star";
import ContactsIcon from "@mui/icons-material/Contacts";

import "./NavbarStyle.scss";

const Navbar = () => {
  return (
    <div className="navbar-fixed-wrapper">
      {/* Left logo */}
      <div className="navbar-logo">
        <a href="/">
          <img src={Logo} alt="Logo" width="50" height="50" />
        </a>
      </div>

      {/* Right vertical menu */}
      <div className="navbar-side">
        <ul>
          <li><HomeIcon /></li>
          <li><PersonIcon /></li>
          <li><SettingsIcon /></li>
          <li><WorkIcon /></li>
          <li><StarIcon /></li>
          <li><ContactsIcon /></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
