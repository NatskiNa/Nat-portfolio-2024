import React from 'react';
import './styles/Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <a
          className="footer-icons"
          href="https://www.linkedin.com/in/natskina/"
        >
          <FaLinkedin size={29} />
        </a>
        <a className="footer-icons" href="https://github.com/NatskiNa">
          <FaGithub size={29} />
        </a>
      </div>

      <div className="copy-right"> &copy; Natski Nakano</div>
    </footer>
  );
};

export default Footer;
