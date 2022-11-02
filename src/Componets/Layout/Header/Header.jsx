import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Header.module.css'

export default function Header() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/characters">
              Characters
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
