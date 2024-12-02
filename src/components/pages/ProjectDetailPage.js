import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './styles/ProjectDetailPage.css';

const ProjectDetailPage = ({ project, closeModal }) => {
  if (!project) return null;

  const handleRedirect = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div>
      <button className="close-button" onClick={closeModal}>
        <FaTimes />
      </button>

      <h2>{project.title}</h2>
      <p className="project-summary">{project.summary}</p>

      {/* <div className="project-images">{project.image}</div> */}

      <h3>Problems and Solutions:</h3>
      {project.problemsAndSolutions.map((item, index) => (
        <p key={index}>{item.content}</p>
      ))}

      <h3>Lessons Learned:</h3>
      <ul>
        {project.lessonsLearned[0].content.map((lesson, index) => (
          <li key={index}>{lesson}</li>
        ))}
      </ul>

      <h3>Future Plans:</h3>
      <ul>
        {project.futurePlans[0].content.map((plan, index) => (
          <li key={index}>{plan}</li>
        ))}
      </ul>

      {/* <h3>Tools and Technologies</h3>
      <div className="skills-content">
        {project.skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div> */}

      <div className="button-container">
        {project.url && (
          <button onClick={() => handleRedirect(project.url)}>LIVE LINK</button>
        )}
        {project.code && (
          <button
            className="btn-white"
            onClick={() => handleRedirect(project.code)}
          >
            CODE
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailPage;
