import React from 'react';
import { NavLink } from 'react-router-dom';

import navlinks from '../../../data/navLinks';
import Dropdown from './Dropdown';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* NAVBAR */}
      <ul className="navbar__ul">
        {/* Nav: Left Side*/}
        <div className="navbar__ul__container">
      <div className="navbar__dropdown">
        <Dropdown />
      </div>
          {navlinks &&
            navlinks.map(({ id, leftTitle, path }) => (
              <NavLink key={id} to={path}>
                <li className="navbar__li">{leftTitle}</li>
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
  );
};

export default Navbar;
