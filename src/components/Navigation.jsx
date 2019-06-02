import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => (
  <nav className="nav">
    <ul className="nav__list">
      <li className="nav__item">
        <NavLink
          activeClassName="nav__link--active"
          className="nav__link"
          to="/todos"
        >
          Todos
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink
          activeClassName="nav__link--active"
          className="nav__link"
          to="/lifecycle"
        >
          Lifecycle example
        </NavLink>
      </li>
    </ul>
  </nav>
);
