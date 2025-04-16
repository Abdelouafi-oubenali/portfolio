export default function SkillCategory({ title, skills }) {
    return (
      <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl shadow-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-6">{title}</h3>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-green-100">{skill.name}</span>
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