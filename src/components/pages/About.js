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
  SiFigma,
} from 'react-icons/si';

const About = () => {
  return (
    <div id="about" className="page-section">
      <h1 className="section-title">ABOUT ME</h1>
      <div className="about-container">
        <div className="about">
          <div className="about-content">
            <p>
              As a front-end developer specializing in responsive and
              user-friendly applications, I have a solid grasp of React,
              enabling me to develop interactive features that enhance user
              engagement. My foundational understanding of backend technologies
              provides a comprehensive perspective on full-stack development
              challenges. I am committed to bringing fresh ideas, adapting
              swiftly to new tools, and staying current with industry trends to
              deliver innovative solutions. Additionally, my background in
              fashion design contributes a keen aesthetic sense, ensuring
              visually appealing and intuitive user experiences.
            </p>
            <div className="button-container">
              <a
                href="s3://my-portfolio-pdfs/NN_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn-red">MY RESUME</button>
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
            <div className="skill-item">
              <SiFigma /> Figma
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
