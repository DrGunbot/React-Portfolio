import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Project.css';

function Project({ projects }) {
  const { projectId } = useParams();
  const project = projects.find((project) => project.id === projectId);

  if (!project) {
    return (
      <div className="project-container">
        <h2>Project not found</h2>
      </div>
    );
  }

  return (
    <div className="project-container">
      <h2>{project.title}</h2>
      <div className="project-links">
        <a href={project.deployedUrl}>View Deployed App</a>
        <a href={project.githubUrl}>View GitHub Repository</a>
      </div>
      <div className="project-screenshot">
        <img src={project.screenshot} alt={project.title} />
      </div>
    </div>
  );
}

export default Project;
