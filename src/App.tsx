import React, { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      {/* Floating Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-full shadow-lg px-4 py-2 w-[95vw] max-w-3xl flex items-center justify-between">
        <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent select-none">
          Ritwik Singh
        </span>
        {/* Desktop Nav */}
        <div className="hidden md:flex ml-10 items-center space-x-8">
          <a href="#home" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">Home</a>
          <a href="#about" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">About</a>
          <a href="#skills" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">Skills</a>
          <a href="#projects" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">Projects</a>
          <a href="#experience" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">Experience</a>
          <a href="#contact" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">Contact</a>
        </div>
        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 focus:outline-none"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>
      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 w-[90vw] max-w-xs bg-slate-900/95 border border-slate-800 rounded-2xl shadow-xl py-6 flex flex-col items-center space-y-4 animate-fade-in">
          <a href="#home" className="text-gray-300 hover:text-emerald-400 text-lg transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#about" className="text-gray-300 hover:text-emerald-400 text-lg transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#skills" className="text-gray-300 hover:text-emerald-400 text-lg transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Skills</a>
          <a href="#projects" className="text-gray-300 hover:text-emerald-400 text-lg transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Projects</a>
          <a href="#experience" className="text-gray-300 hover:text-emerald-400 text-lg transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Experience</a>
          <a href="#contact" className="text-gray-300 hover:text-emerald-400 text-lg transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </div>
      )}

      {/* Page Sections */}
      <div className="pt-24"> {/* Add top padding to avoid overlap with floating navbar */}
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