import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="logo">
          <img src="/NN-logo.png" alt="Logo" />
        </a>

        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
