import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Main from './Main';
import NavLink from './components/NavLink';
import MobileNavLink from './components/MobileNavLink';

export default function GreenThemedPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen overflow-x-hidden font-sans bg-green-50">
      {/* Arrière-plan avec dégradé vert */}
      <div className="fixed inset-0 bg-gradient-to-br from-green-800 via-green-900 to-emerald-900 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,252,231,0.1)_0,transparent_70%)]"></div>
      </div>
      
      {/* Header avec navigation */}
      <header className="fixed top-0 left-0 right-0 bg-green-900 bg-opacity-90 backdrop-blur-sm shadow-lg z-50">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center h-20">
          <div className="flex items-center">
            <div onClick={() => scrollToSection('home')} className="cursor-pointer">
              <span className="text-xl font-bold text-white">TD<span className="text-green-300">.</span></span>
            </div>
          </div>
          
          {/* Navigation desktop */}
          <nav className="hidden md:flex space-x-8">
            <NavLink 
              active={activeSection === 'home'} 
              onClick={() => scrollToSection('home')}
            >
              Accueil
            </NavLink>
            <NavLink 
              active={activeSection === 'about'} 
              onClick={() => scrollToSection('about')}
            >
              À propos
            </NavLink>
            <NavLink 
              active={activeSection === 'projects'} 
              onClick={() => scrollToSection('projects')}
            >
              Projets
            </NavLink>
            <NavLink 
              active={activeSection === 'skills'} 
              onClick={() => scrollToSection('skills')}
            >
              Compétences
            </NavLink>
            <NavLink 
              active={activeSection === 'contact'} 
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </NavLink>
          </nav>
          
          {/* Bouton menu mobile */}
          <button 
            className="md:hidden text-white hover:text-green-300 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-green-900 bg-opacity-95 backdrop-blur-md shadow-lg">
            <div className="container mx-auto px-4 py-2 flex flex-col">
              <MobileNavLink 
                active={activeSection === 'home'} 
                onClick={() => scrollToSection('home')}
              >
                Accueil
              </MobileNavLink>
              <MobileNavLink 
                active={activeSection === 'about'} 
                onClick={() => scrollToSection('about')}
              >
                À propos
              </MobileNavLink>
              <MobileNavLink 
                active={activeSection === 'projects'} 
                onClick={() => scrollToSection('projects')}
              >
                Projets
              </MobileNavLink>
              <MobileNavLink 
                active={activeSection === 'skills'} 
                onClick={() => scrollToSection('skills')}
              >
                Compétences
              </MobileNavLink>
              <MobileNavLink 
                active={activeSection === 'contact'} 
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </MobileNavLink>
            </div>
          </div>
        )}
      </header>

      <Main setActiveSection={setActiveSection} />
    </div>
  );
