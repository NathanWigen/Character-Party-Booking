import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <nav className="header-wrapper">
      <div className="logo">
        <NavLink to="/" className="brand">
          Dream Come True
        </NavLink>
      </div>
      <div className="nav-wrapper">
        <div className="navigation">
          <NavLink to="/">
            About
          </NavLink>
          <NavLink to="/characters">
            Charcters
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Header;
