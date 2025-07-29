import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../../../utils/constants';
import './Footer.css';

const Footer = () => {
  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    email: Mail
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__info">
            <p className="footer__text">
              &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
            </p>
            <p className="footer__built">
              Built with <Heart size={16} className="footer__heart" /> using React & Vanilla CSS
            </p>
          </div>
          
          <div className="footer__social">
            {Object.entries(SOCIAL_LINKS).map(([platform, url]) => {
              const IconComponent = socialIcons[platform];
              if (!IconComponent) return null;
              
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label={`Visit ${platform} profile`}
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;