import React from 'react';
import { Mail, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const emailInfo = {
    icon: <Mail className="w-7 h-7" />,
    label: "Email",
    value: "officialritwik098@gmail.com",
    href: "mailto:officialritwik098@gmail.com",
    color: "from-emerald-400 to-blue-400"
  };

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/datasciritwik",
      color: "hover:text-emerald-400"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ritwik-singh-22b5a01b8",
      color: "hover:text-blue-400"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      label: "Kaggle",
      href: "https://www.kaggle.com/ritwiksingh99",
      color: "hover:text-purple-400"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: "HackerRank",
      href: "https://www.hackerrank.com/profile/officialritwik01",
      color: "hover:text-pink-400"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2310b981%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M50 50m-25 0a25 25 0 1 1 50 0a25 25 0 1 1 -50 0%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400 rounded-full opacity-20 animate-pulse"
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
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to turn your data challenges into opportunities? Let's discuss how we can work together to unlock insights and drive innovation.
          </p>
        </div>

        {/* Redesigned Contact Section */}
        <div className="flex flex-col items-center gap-10">
          {/* Email Card */}
          <a
            href={emailInfo.href}
            className="group flex items-center gap-4 px-8 py-6 bg-slate-800/70 backdrop-blur-md rounded-2xl border border-slate-700/50 shadow-lg hover:border-emerald-400/60 hover:scale-105 transition-all duration-300 max-w-md w-full justify-center"
          >
            <div className={`p-3 rounded-lg bg-gradient-to-r ${emailInfo.color} group-hover:scale-110 transition-transform duration-300`}>
              {emailInfo.icon}
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-400">{emailInfo.label}</p>
              <p className="text-white font-semibold group-hover:text-emerald-400 transition-colors duration-300">
                {emailInfo.value}
              </p>
            </div>
          </a>

          {/* Social Links Card */}
          <div className="bg-slate-800/70 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50 shadow-lg w-full max-w-md text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Connect Online</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`flex items-center gap-2 px-5 py-3 bg-slate-700/30 rounded-lg text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-slate-700/50 font-medium`}
                  target="_blank" rel="noopener noreferrer"
                >
                  {social.icon}
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;