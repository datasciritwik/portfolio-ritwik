import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';

function App() {
  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Update page title
    document.title = "The Living Data Stream | Data Scientist Portfolio";
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Ritwik Singh
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                  Home
                </a>
                <a href="#about" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                  About
                </a>
                <a href="#skills" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                  Skills
                </a>
                <a href="#projects" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                  Projects
                </a>
                <a href="#experience" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                  Experience
                </a>
                <a href="#contact" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                  Contact
                </a>
              </div>
            </div>
            
            <div className="md:hidden">
              <button className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Sections */}
      <div id="home">
        <HeroSection />
      </div>
      
      <div id="about">
        <AboutSection />
      </div>
      
      <div id="skills">
        <SkillsSection />
      </div>
      
      <div id="projects">
        <ProjectsSection />
      </div>
      
      <div id="experience">
        <ExperienceSection />
      </div>
      
      <div id="contact">
        <ContactSection />
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Ritwik Singh
              </span>
              <p className="text-gray-400 mt-2">AI/ML Engineer & Product Builder</p>
            </div>
            
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-emerald-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors duration-300">
                Terms of Service
              </a>
              <span>&copy; 2024 Ritwik Singh. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;