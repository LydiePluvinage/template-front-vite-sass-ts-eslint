import '../../sass/globals/_navbar.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import navlinks from '../../../data/navLinks';

const Navbar = () => {
  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <ul className="navbar__ul">
          {navlinks &&
            navlinks.map(({ id, name }) => {
              <NavLink key={id} to="/home">
                <li className="navbar__li">{name}</li>;
              </NavLink>;
            })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
