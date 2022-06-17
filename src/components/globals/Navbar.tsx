import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import navlinks from '../../../data/navLinks';

const Navbar = () => {
  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <ul className="navbar__ul">
          {/* Nav: Left Side*/}
          <div className="navbar__ul__container">
            {navlinks &&
              navlinks.map(({ id, leftTitle, path, firstDropTitle, secondDropTitle }) => (
                <NavLink key={id} to={path}>
                  <li className="navbar__li">{leftTitle}</li>
                  <div className="navbar__dropdownContent">
                    <Link to="" className="navbar__dropdownContent__titles">
                      {firstDropTitle}
                    </Link>
                    <Link to="" className="navbar__dropdownContent__titles">
                      {secondDropTitle}
                    </Link>
                  </div>
                </NavLink>
              ))}
          </div>

          {/* Nav : Right Side */}
          <div className="navbar__ul__container">
            {navlinks &&
              navlinks.map(({ id, rightTitle, path }) => (
                <NavLink key={id} to={path}>
                  <li className="navbar__li">{rightTitle}</li>
                </NavLink>
              ))}
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
