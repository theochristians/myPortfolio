import React, { useState } from 'react';
import { skills, skillCategories } from '../../../data/skills';
import { SECTION_NUMBERS } from '../../../utils/constants';
import ProfileImage from '../../common/ProfileImage/ProfileImage';
import './AboutSection.css';

const AboutSection = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">{SECTION_NUMBERS.about}. </span>
          About Me
        </h2>
        
        <div className="about__grid">
          <div className="about__content">
            <div className="about__text">
              <p>
                Hello! I'm Theodorus, a software engineer who enjoys learning how to build clean, efficient, and user-friendly systems.
                I've worked on backend and frontend development using technologies like 
                <span className="highlight"> .NET</span>, 
                <span className="highlight"> Flask</span>, 
                <span className="highlight"> Flutter</span>, and 
                <span className="highlight"> React</span>.
              </p>
              <p>
                I'm also fairly comfortable working with 
                <span className="highlight"> SQL Server</span> — including creating tables and optimizing stored procedures for specific tasks.
              </p>
              <p>
                I'm still actively learning and exploring topics like system design, data structuring, caching, and user interface development.
                For me, writing software isn’t just about code — it’s about creating something that’s genuinely useful and easy to use.
              </p>
            </div>
            
            <div className="about__image">
              <div className="about__image-wrapper">
                <ProfileImage
                  src="/assets/images/fotoMe.jpg"
                  className="about__image-photo"
                  lazy={true}
                  onLoad={() => console.log('Profile image loaded successfully')}
                  onError={() => console.warn('Profile image failed to load')}
                />
              </div>
              <div className="about__image-border"></div>
            </div>
          </div>
          
          <div className="about__skills">
            <h3 className="about__skills-title">Technologies I work with</h3>
            
            <div className="skills__categories">
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`skills__category ${
                    activeCategory === category.id ? 'skills__category--active' : ''
                  }`}
                >
                  <span className="skills__category-icon">{category.icon}</span>
                  <span className="skills__category-name">{category.name}</span>
                </button>
              ))}
            </div>
            
            <div className="skills__list">
              {skills[activeCategory]?.map((skill, index) => (
                <div key={skill.name} className="skill__item">
                  <div className="skill__header">
                    <span className="skill__name">{skill.name}</span>
                    <span className="skill__level">{skill.level}%</span>
                  </div>
                  <div className="skill__bar">
                    <div 
                      className="skill__progress"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                  <span className="skill__category-tag">{skill.category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
