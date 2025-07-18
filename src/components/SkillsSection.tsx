import React, { useState } from 'react';
import { Code, Database, Brain, BarChart3, GitBranch, Cloud } from 'lucide-react';

const SkillsSection = () => {
  // No hover state needed for new design

  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming Languages",
      skills: ["Python", "C++", "SQL", "JavaScript/TypeScript", "Bash/Shell"],
      color: "from-emerald-400 to-blue-400"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "AI & Machine Learning",
      skills: ["PyTorch", "TensorFlow", "Hugging Face", "LangChain", "LlamaIndex"],
      color: "from-blue-400 to-purple-400"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Computer Vision & NLP",
      skills: ["OpenCV", "YOLO", "Transformers", "Speech Processing", "CNN"],
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Data & Databases",
      skills: ["Pandas", "NumPy", "PostgreSQL", "MongoDB", "Pinecone", "ChromaDB"],
      color: "from-pink-400 to-emerald-400"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Cloud Platforms",
      skills: ["GCP", "AWS", "Azure", "Vertex AI", "Docker", "Kubernetes"],
      color: "from-emerald-400 to-blue-400"
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "Web & API Frameworks",
      skills: ["FastAPI", "Flask", "Streamlit", "Weights & Biases", "React", "LangGraph"],
      color: "from-blue-400 to-purple-400"
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

        {/* Skills Card Grid - Clean Format */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="relative p-6 bg-slate-800/60 backdrop-blur-md rounded-2xl border border-slate-700/50 hover:border-emerald-400/60 transition-all duration-300 shadow-lg"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 rounded-full bg-slate-700 text-sm text-emerald-300 font-medium border border-slate-600 hover:bg-emerald-400/20 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Radar chart removed for cleaner look */}
      </div>
    </section>
  );
};

export default SkillsSection;