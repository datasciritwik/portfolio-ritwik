import React from 'react';
import { Brain, Search, Zap, Heart, Shield, Users } from 'lucide-react';

const AboutSection = () => {
  const attributes = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Curiosity",
      description: "Always asking 'what if?' and diving deep into data mysteries",
      color: "from-emerald-400 to-blue-400"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Analytical Thinking",
      description: "Breaking down complex problems into solvable components",
      color: "from-blue-400 to-purple-400"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Adaptability",
      description: "Evolving with new technologies and methodologies",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Creativity",
      description: "Finding innovative solutions to data challenges",
      color: "from-pink-400 to-emerald-400"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Skepticism",
      description: "Questioning assumptions and validating hypotheses",
      color: "from-emerald-400 to-blue-400"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Empathy",
      description: "Understanding the human story behind every data point",
      color: "from-blue-400 to-purple-400"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2310b981%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M50 50l20-20v40l-20-20zm-20 0l20 20v-40l-20 20z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Ritwik Singh
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a Data Scientist and product builder focused on creating intelligent systems that solve real-world problems. 
            With a passion for transforming ideas into working products, I've led and developed multiple AI-powered platforms that blend innovation, usability, and automation.
          </p>
        </div>

        {/* Attributes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {attributes.map((attribute, index) => (
            <div
              key={index}
              className="group relative p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${attribute.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {attribute.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{attribute.title}</h3>
              <p className="text-gray-400 leading-relaxed">{attribute.description}</p>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Personal Statement */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Core Beliefs & Vision</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">AI Should Be Invisible</h4>
              <p className="text-gray-400">AI should work silently in the background to enhance human workflows without overwhelming them.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Experimentation Over Perfection</h4>
              <p className="text-gray-400">Learning by building and iterating on real products used by real people.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Software Should Feel Alive</h4>
              <p className="text-gray-400">Good software should feel responsive, personalized, and naturally intelligent.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;