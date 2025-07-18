import React, { useState } from 'react';
import { MapPin, Calendar, Award, TrendingUp, Users, Target } from 'lucide-react';

const ExperienceSection = () => {
  const [activeExperience, setActiveExperience] = useState<number | null>(null);

  const experiences = [
    {
      id: 1,
      company: "EduInnova",
      role: "AI/ML Engineer",
      period: "April 2024 - Jan 2025",
      location: "Remote",
      type: "Full-time",
      description: "Developed and deployed end-to-end AI model pipelines, ensuring seamless integration and scalability.",
      achievements: [
        "Utilized GCP VM Instances for backend deployment and implemented FastAPI for efficient API management",
        "Leveraged GCP Buckets for secure file storage and MongoDB for structured user data management",
        "Integrated Vertex AI Gemini and used Pinecone for vector similarity search and retrieval"
      ],
      tech: ["Python", "FastAPI", "GCP", "MongoDB", "Vertex AI", "Pinecone"],
      color: "from-emerald-400 to-blue-400"
    },
    {
      id: 2,
      company: "Navajna Technologies",
      role: "Software Engineer",
      period: "Aug 2022 - Mar 2024",
      location: "India",
      type: "Full-time",
      description: "Built real-time computer vision systems and 3D reconstruction projects with advanced AI technologies.",
      achievements: [
        "Built real-time person detection and counting system using Intel Retail Detection Model",
        "Led 3D reconstruction project with Neural Radiance Field and OpenMVS, reducing reconstruction time to 10 minutes",
        "Developed avatar-based speech-to-speech systems with lip-sync and tested streaming with WebRTC and Apache Kafka"
      ],
      tech: ["OpenCV", "NeRF", "OpenMVS", "WebRTC", "Apache Kafka", "Computer Vision"],
      color: "from-blue-400 to-purple-400"
    },
    {
      id: 3,
      company: "360DigiTMG",
      role: "Data Science Student",
      period: "Dec 2021 - April 2022",
      location: "India",
      type: "Certification",
      description: "Comprehensive data science training covering machine learning, statistics, and practical applications.",
      achievements: [
        "Completed intensive data science certification program",
        "Built multiple ML projects including predictive models and dashboards",
        "Gained expertise in Python, machine learning algorithms, and data visualization"
      ],
      tech: ["Python", "Machine Learning", "Statistics", "Data Visualization", "Pandas"],
      color: "from-purple-400 to-pink-400"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900 relative overflow-hidden">
      {/* Animated Timeline Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-400 via-blue-400 to-purple-400"></div>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"
            style={{
              top: `${10 + i * 10}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            My Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A timeline of growth, learning, and impact across diverse organizations and challenging projects.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-400 via-blue-400 to-purple-400 opacity-30"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full border-4 border-slate-900 z-10"></div>

              {/* Experience Card */}
              <div
                className={`ml-20 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}
              >
                <div
                  className={`group relative bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                    activeExperience === exp.id ? 'ring-2 ring-emerald-400/50 shadow-2xl shadow-emerald-400/20' : ''
                  }`}
                  onMouseEnter={() => setActiveExperience(exp.id)}
                  onMouseLeave={() => setActiveExperience(null)}
                >
                  {/* Company Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <p className="text-emerald-400 font-semibold">{exp.company}</p>
                    </div>
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${exp.color} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
                      <Award className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Meta Information */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{exp.type}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2 text-emerald-400" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-400 text-sm flex items-start">
                          <Target className="w-3 h-3 mr-2 mt-1 text-emerald-400 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-slate-700/50 rounded-md text-xs text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-20 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Education & Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Masters in CS: AI and ML</h4>
              <p className="text-emerald-400 mb-2">Almabetter (IITG) • 2024-2027</p>
              <p className="text-gray-400 text-sm">Specialized in AI and Machine Learning</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Data Science Certification</h4>
              <p className="text-emerald-400 mb-2">360DigiTMG • 2021-2022</p>
              <p className="text-gray-400 text-sm">Comprehensive Data Science Training</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">B.Sc. Physics</h4>
              <p className="text-emerald-400 mb-2">University of North Bengal • 2018-2021</p>
              <p className="text-gray-400 text-sm">Physics Honors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;