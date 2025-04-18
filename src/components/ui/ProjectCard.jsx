import React from 'react';

export default function ProjectCard({ title, description, tags, imageUrl }) {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:translate-y-[-5px]">
      {/* Image du projet */}
      <img 
        src="https://www.softfluent.fr/wp-content/uploads/2019/10/javascript.png"
        alt={title} 
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-green-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-green-800 bg-opacity-40 text-green-200 text-sm rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
