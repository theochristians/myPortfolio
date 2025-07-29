import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { PERSONAL_INFO, ANIMATION_DELAYS } from '../../../utils/constants';
import Button from '../../common/Button/Button';
import './HeroSection.css';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero__background">
        <div className="hero__gradient"></div>
        <div className="hero__particles"></div>
      </div>
      
      <div className="container">
        <div className="hero__content">
          <p 
            className={`hero__greeting ${isVisible ? 'animate-fade-in-up' : ''}`}
            style={{ animationDelay: `${ANIMATION_DELAYS.greeting}ms` }}
          >
            {PERSONAL_INFO.greeting}
          </p>
          
          <h1 
            className={`hero__name ${isVisible ? 'animate-fade-in-up' : ''}`}
            style={{ animationDelay: `${ANIMATION_DELAYS.name}ms` }}
          >
            {PERSONAL_INFO.name}.
          </h1>
          
          <h2 
            className={`hero__title ${isVisible ? 'animate-fade-in-up' : ''}`}
            style={{ animationDelay: `${ANIMATION_DELAYS.title}ms` }}
          >
            {PERSONAL_INFO.subtitle}
          </h2>
          
          <p 
            className={`hero__description ${isVisible ? 'animate-fade-in-up' : ''}`}
            style={{ animationDelay: `${ANIMATION_DELAYS.description}ms` }}
          >
            {PERSONAL_INFO.description}
          </p>
          
          <div 
            className={`hero__actions ${isVisible ? 'animate-fade-in-up' : ''}`}
            style={{ animationDelay: `${ANIMATION_DELAYS.buttons}ms` }}
          >
            <Button 
              href="#projects" 
              variant="primary" 
              size="large"
              className="hero__cta"
            >
              Check out my work
            </Button>
            <Button 
              href="#contact" 
              variant="outline" 
              size="large"
              className="hero__cta"
            >
              Get in touch
            </Button>
          </div>
        </div>
      </div>
      
      <div className="hero__scroll-indicator">
        <ChevronDown size={32} className="hero__scroll-icon" />
      </div>
    </section>
  );
};

export default HeroSection;