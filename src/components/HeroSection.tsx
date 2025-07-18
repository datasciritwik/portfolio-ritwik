import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2310b981%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        {/* Floating Data Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
        
        {/* Data Stream Lines */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse"
              style={{
                top: `${20 + i * 15}%`,
                left: '0%',
                right: '0%',
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Data Scientist Silhouette */}
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto mb-8 relative">
              {/* Neural Network Brain */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-emerald-400/30">
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-emerald-400/20 to-blue-500/20 animate-pulse">
                  {/* Neural Network Lines */}
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    {/* Animated Neural Connections */}
                    <path
                      d="M20,30 Q50,10 80,30 Q50,50 20,30"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="1"
                      className="animate-pulse"
                    />
                    <path
                      d="M30,20 Q50,40 70,20 Q50,60 30,20"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="1"
                      className="animate-pulse"
                      style={{ animationDelay: '1s' }}
                    />
                    <path
                      d="M20,70 Q50,90 80,70 Q50,50 20,70"
                      fill="none"
                      stroke="#8b5cf6"
                      strokeWidth="1"
                      className="animate-pulse"
                      style={{ animationDelay: '2s' }}
                    />
                    
                    {/* Neural Nodes */}
                    <circle cx="20" cy="30" r="2" fill="#10b981" className="animate-pulse" />
                    <circle cx="80" cy="30" r="2" fill="#3b82f6" className="animate-pulse" />
                    <circle cx="50" cy="50" r="3" fill="#8b5cf6" className="animate-pulse" />
                    <circle cx="30" cy="20" r="2" fill="#10b981" className="animate-pulse" />
                    <circle cx="70" cy="20" r="2" fill="#3b82f6" className="animate-pulse" />
                    <circle cx="20" cy="70" r="2" fill="#8b5cf6" className="animate-pulse" />
                    <circle cx="80" cy="70" r="2" fill="#10b981" className="animate-pulse" />
                  </svg>
                </div>
              </div>
              
              {/* Scanning Eyes */}
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 flex space-x-4">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
              </div>
              
              {/* Heartbeat Line */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse"></div>
            </div>
          </div>

          {/* Main Headlines */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            I turn data into intelligent systems
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            AI/ML Engineer | Data Scientist | Product Builder
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full text-white font-semibold hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <span>View Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-4 border-2 border-emerald-400 text-emerald-400 rounded-full font-semibold hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
              About Me
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/datasciritwik" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 transform hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/ritwik-singh-22b5a01b8" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:officialritwik098@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-emerald-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;