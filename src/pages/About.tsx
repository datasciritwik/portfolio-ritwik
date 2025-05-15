import { Brain, BarChart as ChartBar, Code2, Download } from 'lucide-react';

function About() {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800 section-fade-in">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Passionate about leveraging data and technology to solve complex problems. 
            With expertise spanning data science, analytics, and engineering, I bring a 
            unique perspective to every project.
          </p>
          <a 
            href="https://drive.google.com/file/d/1cjGW6rWhaffvr_Ms0AWeLyozdFIGg7p7/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:scale-105 button-animated shadow-lg"
          >
            Download Resume
            <Download className="ml-2 w-4 h-4" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg card-animated">
            <Brain className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Data Science</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Machine Learning, Deep Learning, NLP, Computer Vision
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg card-animated">
            <ChartBar className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Analytics</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Data Analysis, Business Intelligence, Statistical Modeling
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg card-animated">
            <Code2 className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Engineering</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Software Development, Cloud Architecture, DevOps
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
