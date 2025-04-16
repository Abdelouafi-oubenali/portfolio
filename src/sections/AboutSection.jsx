import React from 'react';
import { Download } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-green-50 bg-opacity-10 backdrop-blur-lg">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-green-100 mb-12 text-center">À propos de moi</h2>
        
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="aspect-square rounded-lg overflow-hidden mb-4">
                <img src="/api/placeholder/400/400" alt="Photo professionnelle" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="md:w-2/3">
              <p className="text-white mb-4 leading-relaxed">
                Je suis un développeur web créatif avec plus de 5 ans d'expérience dans la conception et le développement d'applications web modernes. Ma passion est de créer des expériences numériques à la fois fonctionnelles et esthétiques.
              </p>
              <p className="text-white mb-8 leading-relaxed">
                Spécialisé en React, JavaScript, et UI/UX design, je m'efforce toujours de rester à jour avec les dernières technologies et tendances du développement web.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#" className="inline-flex items-center justify-center px-6 py-2 rounded-lg font-medium transition-all duration-300 bg-green-600 hover:bg-green-700 text-white">
                  <Download size={18} className="mr-2" /> Télécharger mon CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}