import React from 'react';
import { NAVIGATION_ITEMS } from '../../../utils/constants';
import Button from '../../common/Button/Button';
import './Navigation.css';

const Navigation = ({ className = '' }) => {
  return (
    <nav className={`navigation ${className}`}>
      <ul className="navigation__list">
        {NAVIGATION_ITEMS.map((item) => (
          <li key={item.id} className="navigation__item">
            <a href={item.href} className="navigation__link">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <Button 
        href="/resume.pdf" 
        variant="outline" 
        size="small"
        target="_blank"
        rel="noopener noreferrer"
        className="navigation__resume-btn"
      >
        Resume
      </Button>
    </nav>
  );
};

export default Navigation;