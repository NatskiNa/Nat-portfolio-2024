import React from 'react';
import './Navbar.css';

import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/" spy={true} smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" spy={true} smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" spy={true} smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" spy={true} smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
