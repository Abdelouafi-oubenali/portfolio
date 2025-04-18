import React from 'react';

export default function SkillCategory({ title, skills }) {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl shadow-xl p-6">
      <h3 className="text-xl font-semibold text-white mb-6">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-1">
              {/* Logo du skill */}
              <img 
                src={skill.logo} 
                alt={skill.name} 
                className="h-6 w-6 object-contain"
              />
              {/* Niveau en % */}
              <span className="text-green-300">{skill.level}%</span>
            </div>
            <div className="h-2 bg-green-900 rounded-full">
              <div 
                className="h-full bg-green-400 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
