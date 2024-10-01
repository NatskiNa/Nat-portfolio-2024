import React from 'react';
import './styles/Projects.css';
import ProjectData from './ProjectData';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div id="projects" className="page-section">
      <h1 className="section-title">PROJECTS</h1>
      <div className="project-container">
        {ProjectData.map((project) => (
          <div key={project.id} className="project-wrapper">
            <div className="project">
              <p className="job-title">{project.jobTitle}</p>
              <h2 className="content-title">{project.title}</h2>
              <div className="project-content">
                <p>{project.introduction}</p>
                <div className="skills-content">
                  {project.skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      {skill}
                    </div>
                  ))}
                </div>
                <div className="project-link-container">
                  <Link to={`/projects/${project.id}`}>
                    <button>VIEW PROJECT</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="project-images">
              <div className="project-image-container">images</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
