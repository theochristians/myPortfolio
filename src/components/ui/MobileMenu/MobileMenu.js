import React, { useEffect } from 'react';
import { NAVIGATION_ITEMS } from '../../../utils/constants';
import Button from '../../common/Button/Button';
import './MobileMenu.css';

const MobileMenu = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className={`mobile-menu ${isOpen ? 'mobile-menu--open' : ''}`}>
      <div className="mobile-menu__backdrop" onClick={onClose} />
      <div className="mobile-menu__content">
        <nav className="mobile-menu__nav">
          <ul className="mobile-menu__list">
            {NAVIGATION_ITEMS.map((item, index) => (
              <li key={item.id} className="mobile-menu__item">
                <a 
                  href={item.href} 
                  className="mobile-menu__link"
                  onClick={handleLinkClick}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="mobile-menu__number">0{index + 1}.</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-menu__actions">
            <Button 
              href="/resume.pdf" 
              variant="outline" 
              size="medium"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
            >
              Resume
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;