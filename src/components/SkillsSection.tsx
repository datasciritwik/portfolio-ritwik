import React, { useState } from 'react';
import { Code, Database, Brain, BarChart3, GitBranch, Cloud } from 'lucide-react';

const SkillsSection = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming Languages",
      skills: ["Python", "C++", "SQL", "JavaScript/TypeScript", "Bash/Shell"],
      color: "from-emerald-400 to-blue-400",
      level: 92
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "AI & Machine Learning",
      skills: ["PyTorch", "TensorFlow", "Hugging Face", "LangChain", "LlamaIndex"],
      color: "from-blue-400 to-purple-400",
      level: 88
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Computer Vision & NLP",
      skills: ["OpenCV", "MediaPipe", "Transformers", "Speech Processing", "GANs"],
      color: "from-purple-400 to-pink-400",
      level: 85
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Data & Databases",
      skills: ["Pandas", "NumPy", "PostgreSQL", "MongoDB", "Pinecone", "ChromaDB"],
      color: "from-pink-400 to-emerald-400",
      level: 90
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Cloud Platforms",
      skills: ["GCP", "AWS", "Azure", "Vertex AI", "Docker", "Kubernetes"],
      color: "from-emerald-400 to-blue-400",
      level: 86
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "Web & API Frameworks",
      skills: ["FastAPI", "Flask", "Streamlit", "Node.js", "React"],
      color: "from-blue-400 to-purple-400",
      level: 83
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            My Skill Network
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A dynamic ecosystem of technologies and methodologies that power my data science journey.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group relative p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                activeSkill === category.title ? 'ring-2 ring-emerald-400/50' : ''
              }`}
              onMouseEnter={() => setActiveSkill(category.title)}
              onMouseLeave={() => setActiveSkill(null)}
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
              
              {/* Skill Level Bar */}
              <div className="w-full bg-slate-700 rounded-full h-2 mb-4">
                <div
                  className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                  style={{ width: `${category.level}%` }}
                ></div>
              </div>
              
              {/* Skills List */}
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`flex items-center space-x-2 transition-all duration-300 ${
                      activeSkill === category.title ? 'text-emerald-400' : 'text-gray-400'
                    }`}
                  >
                    <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${category.color} ${
                      activeSkill === category.title ? 'animate-pulse' : ''
                    }`}></div>
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Skill Radar Chart Representation */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Expertise Visualization</h3>
          <div className="flex justify-center">
            <div className="relative w-80 h-80">
              {/* Radar Chart Background */}
              <div className="absolute inset-0 rounded-full border-4 border-slate-600/30"></div>
              <div className="absolute inset-8 rounded-full border-2 border-slate-600/20"></div>
              <div className="absolute inset-16 rounded-full border-2 border-slate-600/20"></div>
              
              {/* Skill Nodes */}
              {skillCategories.map((category, index) => {
                const angle = (index * 60) * (Math.PI / 180);
                const radius = 120;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <div
                    key={index}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                    style={{
                      left: `50%`,
                      top: `50%`,
                      transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`
                    }}
                    onMouseEnter={() => setActiveSkill(category.title)}
                    onMouseLeave={() => setActiveSkill(null)}
                  >
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center transition-all duration-300 ${
                      activeSkill === category.title ? 'scale-125 shadow-lg shadow-emerald-400/50' : 'hover:scale-110'
                    }`}>
                      <div className="w-6 h-6 text-white">
                        {category.icon}
                      </div>
                    </div>
                    
                    {/* Skill Label */}
                    <div className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-xs text-center transition-all duration-300 ${
                      activeSkill === category.title ? 'text-emerald-400 font-semibold' : 'text-gray-400'
                    }`}>
                      {category.title}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;