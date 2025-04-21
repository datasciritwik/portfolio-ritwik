import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    category: 'data-science',
    title: 'Customer Churn Prediction',
    description: 'ML model predicting customer churn with 95% accuracy',
    tech: ['Python', 'Scikit-learn', 'TensorFlow'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    github: 'https://sites.google.com/view/ritwik-profile/projects?authuser=0',
    outcome: '95% prediction accuracy'
  },
  {
    category: 'analytics',
    title: 'Sales Analytics Dashboard',
    description: 'Interactive dashboard for real-time sales monitoring',
    tech: ['Power BI', 'SQL', 'Python'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    github: 'https://sites.google.com/view/ritwik-profile/projects?authuser=0',
    outcome: 'Increased sales insights by 40%'
  },
  {
    category: 'engineering',
    title: 'Microservices Architecture',
    description: 'Scalable system design using microservices',
    tech: ['Docker', 'AWS', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    github: 'https://sites.google.com/view/ritwik-profile/projects?authuser=0',
    outcome: '30% improved system performance'
  }
];

function Projects() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        
        {/* Project Filters */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full ${
              activeTab === 'all' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 dark:bg-gray-800'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab('data-science')}
            className={`px-4 py-2 rounded-full ${
              activeTab === 'data-science' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 dark:bg-gray-800'
            }`}
          >
            Data Science
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-4 py-2 rounded-full ${
              activeTab === 'analytics' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 dark:bg-gray-800'
            }`}
          >
            Analytics
          </button>
          <button
            onClick={() => setActiveTab('engineering')}
            className={`px-4 py-2 rounded-full ${
              activeTab === 'engineering' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 dark:bg-gray-800'
            }`}
          >
            Engineering
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-green-600 dark:text-green-400 mb-4">
                  🎯 {project.outcome}
                </p>
                <a
                  href={project.github}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="mt-12 text-center">
          <a
            href="https://sites.google.com/view/ritwik-profile/projects?authuser=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
          >
            View More Projects
            <ExternalLink className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
