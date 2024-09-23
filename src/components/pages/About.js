import React from 'react';
import './styles/About.css';

const About = () => {
  return (
    <div id="about" className="about-section">
      <h1>ABOUT ME</h1>
      <div className="about-content">
        <p>
          I'm a front-end developer specializing in creating responsive and
          user-friendly applications. With a strong interest React, I enjoy
          developing interactive features while enhancing m skills. My
          foundational backend knowledge helps me understand full-stack
          challenges. I’m eager to bring fresh ideas, adapt to new tools, and
          stay current with industry trends.
        </p>
        <button>MY RESUME</button>
      </div>
      <div className="skills">
        <h2>SKILLS</h2>
        <div className="skills-content"></div>
      </div>
    </div>
  );
};

export default About;
