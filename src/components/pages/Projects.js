import React, { useState } from 'react';
import Modal from 'react-modal';
import './styles/Projects.css';
import ProjectData from './ProjectData';
import ProjectDetailPage from './ProjectDetailPage';

const customStyles = {
  content: {
    top: '20%',
    maxHeight: '80vh',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

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
                  <button onClick={() => openModal(project)}>
                    VIEW PROJECT
                  </button>
                </div>
              </div>
            </div>
            <div className="project-images">
              <div className="project-image-container">images</div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Project Details"
      >
        <ProjectDetailPage project={selectedProject} closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default Projects;
