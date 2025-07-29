import React, { useState } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { experiences } from '../../../data/experiences';
import { SECTION_NUMBERS } from '../../../utils/constants';
import './ExperienceSection.css';

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [previewTab, setPreviewTab] = useState(null);

  const displayedTab = previewTab !== null ? previewTab : activeTab;

  const handleTabClick = (index) => {
    setActiveTab(index);
    setPreviewTab(null);
  };

  const handleTabHover = (index) => {
    if (index !== activeTab) {
      setPreviewTab(index);
    }
  };

  const handleTabLeave = () => {
    setPreviewTab(null);
  };

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">{SECTION_NUMBERS.experience}. </span>
          Where I've Worked
        </h2>
        
        <div className="experience__container">
          <div className="experience__tabs">
            {experiences.map((exp, index) => (
              <button
                key={exp.id}
                onClick={() => handleTabClick(index)}
                onMouseEnter={() => handleTabHover(index)}
                onMouseLeave={handleTabLeave}
                className={`experience__tab ${
                  activeTab === index ? 'experience__tab--active' : 
                  previewTab === index ? 'experience__tab--preview' : ''
                }`}
              >
                <span className="experience__tab-company">{exp.company}</span>
                <span className="experience__tab-position">{exp.position}</span>
                {activeTab === index && <div className="experience__tab-indicator"></div>}
              </button>
            ))}
          </div>
          
          <div className="experience__content">
            <div className="experience__card">
              <div className="experience__header">
                <h3 className="experience__position">
                  {experiences[displayedTab].position}
                  <span className="experience__at"> @ </span>
                  <a 
                    href={experiences[displayedTab].website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="experience__company"
                  >
                    {experiences[displayedTab].company}
                    <ExternalLink size={16} className="experience__external-icon" />
                  </a>
                </h3>
                
                <div className="experience__meta">
                  <div className="experience__duration">
                    <Calendar size={16} />
                    <span>{experiences[displayedTab].duration}</span>
                  </div>
                  <div className="experience__location">
                    <MapPin size={16} />
                    <span>{experiences[displayedTab].location}</span>
                  </div>
                  <div className="experience__type">
                    <span className={`experience__type-badge ${
                      experiences[displayedTab].current ? 'experience__type-badge--current' : ''
                    }`}>
                      {experiences[displayedTab].type}
                      {experiences[displayedTab].current && ' (Current)'}
                    </span>
                  </div>
                </div>
                
                <div className="experience__status">
                  {previewTab !== null && previewTab !== activeTab && (
                    <span className="experience__status-badge experience__status-badge--preview">
                      Preview Mode
                    </span>
                  )}
                  {activeTab === displayedTab && previewTab === null && (
                    <span className="experience__status-badge experience__status-badge--selected">
                      Selected
                    </span>
                  )}
                </div>
              </div>
              
              <ul className="experience__description">
                {experiences[displayedTab].description.map((item, index) => (
                  <li key={index} className="experience__description-item">
                    <span className="experience__bullet">▹</span>
                    <span className="experience__description-text">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="experience__technologies">
                {experiences[displayedTab].technologies.map((tech, index) => (
                  <span key={index} className="experience__tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;