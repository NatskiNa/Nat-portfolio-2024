import React, { useState } from 'react';
import Modal from 'react-modal';
import './styles/Projects.css';
import projectData from '../../data/projectData.json';
import ProjectDetailPage from './ProjectDetailPage';

Modal.setAppElement('#root');

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalIsOpen(false);
  };

  return (
    <div id="projects" className="page-section">
      <h1 className="section-title">PROJECTS</h1>
      <div className="project-container">
        {projectData.map((project) => (
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
                  <button onClick={() => openModal(project)}>
                    VIEW PROJECT
                  </button>
                </div>
              </div>
            </div>
            <div className="project-images">
              <div className="project-image-container">
                <img
                  className="left-image"
                  src={project.images[0]}
                  alt={project.title}
                />
                <img
                  className="right-image"
                  src={project.images[1]}
                  alt={project.title}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
        contentLabel="Project Details"
      >
        {selectedProject && (
          <ProjectDetailPage
            project={selectedProject}
            closeModal={closeModal}
          />
        )}
      </Modal>
    </div>
  );
};

export default Projects;
