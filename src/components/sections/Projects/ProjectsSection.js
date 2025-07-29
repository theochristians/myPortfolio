import React, { useState, useMemo } from 'react';
import { projects, getProjectCategories, filterProjectsByCategory } from '../../../data/projects';
import { SECTION_NUMBERS } from '../../../utils/constants';
import ProjectCard from './ProjectCard';
import Button from '../../common/Button/Button';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState('all');
  
  // Get categories with counts using the helper function
  const categories = useMemo(() => getProjectCategories(), []);
  
  // Get filtered projects
  const filteredProjects = useMemo(() => filterProjectsByCategory(filter), [filter]);
  
  // Get featured projects (only from current filter)
  const featuredProjects = useMemo(() => {
    const filtered = filterProjectsByCategory(filter);
    return filtered.filter(project => project.featured);
  }, [filter]);
  
  // Determine which projects to display
  const displayedProjects = showAll ? filteredProjects : featuredProjects;
  
  // Handle filter change
  const handleFilterChange = (category) => {
    setFilter(category);
    setShowAll(false); // Reset to show featured projects when changing filter
  };

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">{SECTION_NUMBERS.projects}. </span>
          Some Things I've Built
        </h2>
        
        <div className="projects__filters">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => handleFilterChange(category.name)}
              className={`projects__filter ${
                filter === category.name ? 'projects__filter--active' : ''
              }`}
            >
              <span className="projects__filter-text">
                {category.name === 'all' ? 'All' : category.name}
              </span>
              <span className="projects__filter-count">
                ({category.count})
              </span>
            </button>
          ))}
        </div>
        
        {/* Show current filter info */}
        <div className="projects__filter-info">
          {filter === 'all' ? (
            <p>Showing {displayedProjects.length} of {projects.length} projects</p>
          ) : (
            <p>Showing {displayedProjects.length} {filter.toLowerCase()} project{displayedProjects.length !== 1 ? 's' : ''}</p>
          )}
        </div>
        
        <div className="projects__grid">
          {displayedProjects.length > 0 ? (
            displayedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))
          ) : (
            <div className="projects__empty">
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
        
        {!showAll && filteredProjects.length > featuredProjects.length && (
          <div className="projects__actions">
            <Button
              onClick={() => setShowAll(true)}
              variant="outline"
              size="large"
            >
              Show More {filter === 'all' ? 'Projects' : `${filter} Projects`}
              ({filteredProjects.length - featuredProjects.length} more)
            </Button>
          </div>
        )}
        
        {showAll && (
          <div className="projects__actions">
            <Button
              onClick={() => setShowAll(false)}
              variant="ghost"
              size="medium"
            >
              Show Less
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;