import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrolled } from '../../../hooks/useScrolled';
import Navigation from '../../ui/Navigation/Navigation';
import MobileMenu from '../../ui/MobileMenu/MobileMenu';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useScrolled(50);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
        <div className="container">
          <div className="header__content">
            <div className="header__logo">
              <a href="#home" className="header__logo-link">
                Portfolio
              </a>
            </div>
            
            <Navigation className="header__nav" />
            
            <button 
              className="header__menu-toggle"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={closeMobileMenu} 
      />
    </>
  );
};

export default Header;