import React from 'react';
import { Terminal, ArrowRight, Code2, Brain, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Gradient Background */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] animate-grid"></div>
        </div>

        <div className="container mx-auto px-6 relative">
          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 text-center md:text-left">
              {/* Animated Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4 animate-fade-in">
                <span className="flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Available for work
              </div>

              {/* Main Title with Gradient Text */}
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
                  Bridging Data,
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">
                  Insights & Innovation
                </span>
              </h1>

              {/* Description with Animated Typing Effect */}
              <div className="typing-container">
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 typing-animation">
                  A Data Scientist, Analyst, and Engineer, solving complex problems with data, algorithms, and technology.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
                <Link
                  to="/projects"
                  className="group relative inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                >
                  <span>Explore My Work</span>
                  <Terminal className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="hidden md:grid grid-cols-3 gap-6 mt-20">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <Brain className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Data Science</h3>
                <p className="text-gray-600 dark:text-gray-400">Machine Learning, Deep Learning, NLP</p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <BarChart className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Analytics</h3>
                <p className="text-gray-600 dark:text-gray-400">Business Intelligence, Data Analysis</p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <Code2 className="w-8 h-8 text-indigo-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Engineering</h3>
                <p className="text-gray-600 dark:text-gray-400">Software Development, Cloud Architecture</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;