import React from 'react';

const ProjectDetailPage = ({ project, closeModal }) => {
  if (!project) return null;

  return (
    <div>
      <h2>{project.title}</h2>
      <div className="project-images">{project.image}</div>
      <p>{project.description}</p>
      <div className="skills-content">
        {project.skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>

      {/* Add more project detail here */}

      <button onClick={closeModal}>Close</button>
    </div>
  );
};

export default ProjectDetailPage;
