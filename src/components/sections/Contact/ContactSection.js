import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { SECTION_NUMBERS, CONTACT_INFO, PERSONAL_INFO } from '../../../utils/constants';
import Button from '../../common/Button/Button';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">{SECTION_NUMBERS.contact}. </span>
          {CONTACT_INFO.title}
        </h2>
        
        <div className="contact__content">
          <div className="contact__header">
            <h3 className="contact__title">{CONTACT_INFO.heading}</h3>
            <div className="contact__icon">
              <MessageCircle size={48} className="contact__icon-graphic" />
            </div>
          </div>
          
          <p className="contact__description">
            {CONTACT_INFO.description}
          </p>
          
          <div className="contact__actions">
            <Button 
              href={`mailto:${PERSONAL_INFO.email}`}
              variant="primary"
              size="large"
              className="contact__cta"
            >
              <Mail size={20} />
              {CONTACT_INFO.buttonText}
            </Button>
            
            <div className="contact__info">
              <p className="contact__email">
                <Mail size={16} />
                <a href={`mailto:${PERSONAL_INFO.email}`}>{PERSONAL_INFO.email}</a>
              </p>
              <p className="contact__location">
                📍 {PERSONAL_INFO.location}
              </p>
            </div>
          </div>
          
          <div className="contact__note">
            <p>
              I typically respond within 24 hours. Looking forward to hearing from you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;