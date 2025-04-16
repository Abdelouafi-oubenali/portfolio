import React from 'react';
import ProjectCard from '../components/ProjectCard';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-green-100 mb-12 text-center">Mes projets récents</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            title="Application E-commerce"
            description="Plateforme de vente en ligne avec panier d'achat et paiement sécurisé"
            tags={["React", "Node.js", "MongoDB"]}
          />
          <ProjectCard 
            title="Dashboard Analytics"
            description="Interface d'analyse de données avec visualisations interactives"
            tags={["React", "D3.js", "Firebase"]}
          />
          <ProjectCard 
            title="Portfolio Artiste"
            description="Galerie d'art responsive avec effets de transitions fluides"
            tags={["React", "Tailwind CSS", "Netlify"]}
          />
        </div>
      </div>
    </section>
  );
}