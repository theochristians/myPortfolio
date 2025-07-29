import React from 'react';
import { Github, ExternalLink, Calendar, Tag } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`project-card ${isEven ? 'project-card--left' : 'project-card--right'}`}>
      <div className="project-card__image">
        <div className="project-card__image-container">
          <img src={project.image} alt={project.title} className="project-card__image-photo" />
          <div className="project-card__image-overlay"></div>
          <div className="project-card__links">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-card__link"
              aria-label="View source code"
            >
              <Github size={24} />
            </a>
            <a 
              href={project.live} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-card__link"
              aria-label="View live demo"
            >
              <ExternalLink size={24} />
            </a>
          </div>
          <div className="project-card__status">
            <span className={`project-card__status-badge project-card__status-badge--${project.status.toLowerCase().replace(' ', '-')}`}>
              {project.status}
            </span>
          </div>
        </div>
      </div>
      
      <div className="project-card__content">
        <div className="project-card__header">
          <p className="project-card__featured">Featured Project</p>
          <div className="project-card__category">
            <Tag size={14} />
            <span>{project.category}</span>
          </div>
        </div>
        
        <h3 className="project-card__title">{project.title}</h3>
        
        <div className="project-card__description">
          <p>{project.description}</p>
        </div>
        
        <div className="project-card__technologies">
          {project.technologies.map((tech, i) => (
            <span key={i} className="project-card__tech">{tech}</span>
          ))}
        </div>
        
        <div className="project-card__actions">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-card__action-link"
          >
            <Github size={18} />
            <span>Code</span>
          </a>
          <a 
            href={project.live} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-card__action-link project-card__action-link--primary"
          >
            <ExternalLink size={18} />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;