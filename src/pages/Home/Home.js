import React from 'react';
import HeroSection from '../../components/sections/Hero/HeroSection';
import AboutSection from '../../components/sections/About/AboutSection';
import ExperienceSection from '../../components/sections/Experience/ExperienceSection';
import ProjectsSection from '../../components/sections/Projects/ProjectsSection';
import ContactSection from '../../components/sections/Contact/ContactSection';
import './Home.css';

const Home = () => {
  return (
    <main className="home">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
};

export default Home;