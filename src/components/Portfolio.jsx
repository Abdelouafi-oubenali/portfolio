import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import HomeSection from './sections/HomeSection';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import ContactSection from './sections/ContactSection';
import { useScrollSection } from '../hooks/useScrollSection';

export default function Portfolio() {
  const { activeSection, scrollToSection } = useScrollSection('home');

  return (
    <div className="min-h-screen overflow-x-hidden font-sans bg-green-50">
      {/* Arrière-plan avec dégradé vert */}
      <div className="fixed inset-0 bg-gradient-to-br from-green-800 via-green-900 to-emerald-900 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,252,231,0.1)_0,transparent_70%)]"></div>
      </div>
      
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />

      <main className="relative z-10">
        <HomeSection scrollToSection={scrollToSection} />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}