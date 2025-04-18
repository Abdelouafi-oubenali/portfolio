import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import SocialLink from '../ui/SocialLink';

export default function Footer({ scrollToSection }) {
  return (
    <footer className="bg-green-900 bg-opacity-95 text-white py-12 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold flex items-center">
              Thomas Dupont<span className="text-green-300 ml-1">.</span>
            </h3>
            <p className="text-green-200 mt-2">Développeur Web & Designer UI/UX</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <SocialLink icon={<Github size={20} />} href="#" />
              <SocialLink icon={<Linkedin size={20} />} href="#" />
              <SocialLink icon={<Mail size={20} />} href="mailto:email@exemple.com" />
            </div>
            <button 
              className="text-green-300 hover:text-white transition-colors flex items-center" 
              onClick={() => scrollToSection('home')}
            >
              Retour en haut
            </button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-green-800 text-center text-green-300">
          <p>&copy; {new Date().getFullYear()} Thomas Dupont. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}