import React from 'react';
import './styles/Projects.css';

const Projects = () => {
  return (
    <div id="projects" className="page-section">
      <h1 className="section-title">PROJECTS</h1>
      <div className="section-container">
        <div className="project">
          <p className="job-title">Junior Web Developer</p>
          <h2 className="content-title">Ahmed Tech Academy</h2>
          <div className="project-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pulvinar, mi et tincidunt bibendum, magna dui tincidunt ex, vel
              fermentum nunc neque vel dui. Nullam et purus sit amet sem
              fermentum ultrices.
            </p>
            <div className="skills-content">
              <div className="skill-item">HTML5</div>
              <div className="skill-item">CSS3</div>
              <div className="skill-item">JavaScript</div>
            </div>
            <div className="button-container">
              <a href="/NN_CV.pdf" target="_blank" rel="noopener noreferrer">
                <button>VIEW PROJECT</button>
              </a>
            </div>
          </div>
        </div>

        <div className="project-images">
          <div className="image-container">images</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
