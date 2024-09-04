import React from 'react';
import './Header.css';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div className="header-container">
      <h2>Hi, I'm Natski, </h2>
      <h1>
        <Typewriter
          options={{
            strings: [
              'FRONT-END WEB DEVELOPER',
              'React | React Native',
              'A DESIGNER',
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <div className="buttons">
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={100}
          offset={-100}
        >
          <div className="contact-me-btn">Contact Me</div>
        </Link>
        <div className="resume-btn">
          <a className="resume-link" href="/NN_CV.pdf" download="NN_CV.pdf">
            Get Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
