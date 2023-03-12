import React from 'react';
import { Link } from 'react-router-dom';
import Project from './Project';
import projectsData from '../data/projects.json';
import '../styles/ProjectGallery.css';

function ProjectGallery() {
  const projects = projectsData.slice(0, 6);

  return (
    <div className="project-gallery-container">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-list-item">
            <Link to={`/projects/${project.id}`}>
              <Project projects={[project]} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectGallery;
