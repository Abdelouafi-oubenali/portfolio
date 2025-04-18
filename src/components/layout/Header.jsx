import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import NavLink from '../ui/NavLink';
import MobileNavLink from '../ui/MobileNavLink';

export default function Header({ activeSection, scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-green-900 bg-opacity-90 backdrop-blur-sm shadow-lg z-50">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center h-20">
        <div className="flex items-center">
          <div onClick={() => scrollToSection('home')} className="cursor-pointer">
            {/* Logo ou nom */}
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
              onClick={() => {
                scrollToSection('home');
                setIsMenuOpen(false);
              }}
            >
              Accueil
            </MobileNavLink>
            <MobileNavLink 
              active={activeSection === 'about'} 
              onClick={() => {
                scrollToSection('about');
                setIsMenuOpen(false);
              }}
            >
              À propos
            </MobileNavLink>
            <MobileNavLink 
              active={activeSection === 'projects'} 
              onClick={() => {
                scrollToSection('projects');
                setIsMenuOpen(false);
              }}
            >
              Projets
            </MobileNavLink>
            <MobileNavLink 
              active={activeSection === 'skills'} 
              onClick={() => {
                scrollToSection('skills');
                setIsMenuOpen(false);
              }}
            >
              Compétences
            </MobileNavLink>
            <MobileNavLink 
              active={activeSection === 'contact'} 
              onClick={() => {
                scrollToSection('contact');
                setIsMenuOpen(false);
              }}
            >
              Contact
            </MobileNavLink>
          </div>
        </div>
      )}
    </header>
  );
}