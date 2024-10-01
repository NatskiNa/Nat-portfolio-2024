import React from 'react';
import './styles/About.css';
import {
  SiHtml5,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiRedux,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiAdobeillustrator,
} from 'react-icons/si';

const About = () => {
  return (
    <div id="about" className="page-section">
      <h1 className="section-title">ABOUT ME</h1>
      <div className="section-container">
        <div className="about">
          {/* <h2 className="content-title">BIO</h2> */}
          <div className="about-content">
            <p>
              I'm a front-end developer specializing in creating responsive and
              user-friendly applications. With a strong interest in React, I
              enjoy developing interactive features while enhancing my skills.
              My foundational backend knowledge helps me understand full-stack
              challenges. I’m eager to bring fresh ideas, adapt to new tools,
              and stay current with industry trends.
            </p>
            <div className="button-container">
              <a href="/NN_CV.pdf" target="_blank" rel="noopener noreferrer">
                <button>MY RESUME</button>
              </a>
            </div>
          </div>
        </div>

        <div className="skills">
          <h2 className="content-title">My Skills</h2>
          <div className="skills-content">
            <div className="skill-item">
              <SiHtml5 /> HTML5
            </div>
            <div className="skill-item">
              <SiCss3 /> CSS3
            </div>
            <div className="skill-item">
              <SiJavascript /> JavaScript
            </div>
            <div className="skill-item">
              <SiReact /> React
            </div>
            <div className="skill-item">
              <SiRedux /> Redux
            </div>
            <div className="skill-item">
              <SiNodedotjs /> Node.js
            </div>
            <div className="skill-item">
              <SiExpress /> Express
            </div>
            <div className="skill-item">
              <SiBootstrap /> Bootstrap
            </div>
            <div className="skill-item">
              <SiAdobeillustrator /> Adobe Illustrator
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
