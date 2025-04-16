export default function ProjectCard({ title, description, tags }) {
    return (
      <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:translate-y-[-5px]">
        <div className="h-48 bg-green-800 bg-opacity-50"></div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-green-100 mb-4">{description}</p>
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