import React, { useState, useEffect } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';

function Layout() {
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white'}`}>
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          {/* Desktop Navigation */}
          <div className="relative flex justify-between items-center">
            {/* Logo */}
            <NavLink 
              to="/" 
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text"
            >
              Ritwik Singh
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              <NavLink 
                to="/about"
                className={({ isActive }) => `
                  px-4 py-2 rounded-full transition-all duration-300
                  ${isActive 
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }
                `}
              >
                About
              </NavLink>
              <NavLink 
                to="/projects"
                className={({ isActive }) => `
                  px-4 py-2 rounded-full transition-all duration-300
                  ${isActive 
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }
                `}
              >
                Projects
              </NavLink>
              <NavLink 
                to="/contact"
                className={({ isActive }) => `
                  px-4 py-2 rounded-full transition-all duration-300
                  ${isActive 
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }
                `}
              >
                Contact
              </NavLink>
              
              {/* Theme Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="ml-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div 
            className={`
              md:hidden absolute left-0 right-0 top-full mt-2 py-2 px-4
              bg-white dark:bg-gray-900 rounded-2xl shadow-lg
              transition-all duration-300 transform origin-top
              ${isMobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}
            `}
          >
            <div className="flex flex-col space-y-1">
              <NavLink 
                to="/about"
                className={({ isActive }) => `
                  px-4 py-2 rounded-full transition-all duration-300
                  ${isActive 
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }
                `}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink 
                to="/projects"
                className={({ isActive }) => `
                  px-4 py-2 rounded-full transition-all duration-300
                  ${isActive 
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }
                `}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </NavLink>
              <NavLink 
                to="/contact"
                className={({ isActive }) => `
                  px-4 py-2 rounded-full transition-all duration-300
                  ${isActive 
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }
                `}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </NavLink>
              
              {/* Mobile Theme Toggle */}
              <button
                onClick={() => {
                  setDarkMode(!darkMode);
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center px-4 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {darkMode ? (
                  <>
                    <Sun className="w-5 h-5 mr-2" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-5 h-5 mr-2" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;