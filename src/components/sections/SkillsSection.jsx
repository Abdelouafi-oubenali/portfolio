import React from 'react';
import SkillCategory from '../ui/SkillCategory';

export default function SkillsSection() {
  const frontendSkills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 75 },
    { name: "HTML/CSS", level: 95 },
    { name: "Tailwind CSS", level: 80 }
  ];

  const backendSkills = [
    { name: "Node.js", level: 80 },
    { name: "Express", level: 75 },
    { name: "MongoDB", level: 70 },
    { name: "GraphQL", level: 65 },
    { name: "Firebase", level: 70 }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-green-50 bg-opacity-10 backdrop-blur-lg">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-green-100 mb-12 text-center">Mes compétences</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCategory 
            title="Développement Frontend" 
            skills={frontendSkills} 
          />
          
          <SkillCategory 
            title="Développement Backend" 
            skills={backendSkills} 
          />
        </div>
      </div>
    </section>
  );
}