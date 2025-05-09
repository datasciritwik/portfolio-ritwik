import { Terminal, ArrowRight, Code2, Brain, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Animated Background with Parallax Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black opacity-90 animate-gradient-move"></div>
        <div className="absolute left-1/2 top-1/3 w-[120vw] h-[120vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-500/20 via-purple-400/10 to-pink-500/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-tl from-pink-500/30 to-transparent blur-2xl animate-float"></div>
        <div className="absolute left-0 top-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-400/30 to-transparent blur-2xl animate-float-reverse"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-8">
        {/* Neon Animated Name */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight bg-gradient-to-r from-fuchsia-400 via-blue-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-neon animate-glow">
          Ritwik Singh
        </h1>
        <p className="mt-6 text-lg sm:text-2xl md:text-3xl text-white/80 font-light animate-fade-in">
          <span className="inline-block animate-typewriter border-r-4 border-fuchsia-400 pr-2">Data Alchemist & Creative Technologist</span>
        </p>
        {/* Animated Orbiting Icons */}
        <div className="relative mt-12 sm:mt-16 w-48 h-48 sm:w-64 sm:h-64 mx-auto">
          <span className="absolute left-1/2 top-0 -translate-x-1/2 animate-orbit-1">
            <Brain className="w-10 h-10 sm:w-12 sm:h-12 text-fuchsia-400 drop-shadow-neon" />
          </span>
          <span className="absolute right-0 top-1/2 -translate-y-1/2 animate-orbit-2">
            <BarChart className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400 drop-shadow-neon" />
          </span>
          <span className="absolute left-1/2 bottom-0 -translate-x-1/2 animate-orbit-3">
            <Code2 className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400 drop-shadow-neon" />
          </span>
          <span className="absolute left-0 top-1/2 -translate-y-1/2 animate-orbit-4">
            <Terminal className="w-10 h-10 sm:w-12 sm:h-12 text-pink-400 drop-shadow-neon" />
          </span>
        </div>
        {/* Call to Action Buttons */}
        <div className="mt-12 sm:mt-16 flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center animate-fade-in w-full">
          <Link
            to="/projects"
            className="relative w-full md:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white text-lg sm:text-xl font-bold shadow-xl hover:scale-110 transition-transform button-animated after:absolute after:inset-0 after:rounded-full after:animate-glow-pulse text-center"
          >
            <span className="relative z-10">See My Projects</span>
          </Link>
          <Link
            to="/contact"
            className="relative w-full md:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-lg sm:text-xl font-bold shadow-xl hover:scale-110 transition-transform button-animated after:absolute after:inset-0 after:rounded-full after:animate-glow-pulse text-center"
          >
            <span className="relative z-10">Contact Me</span>
          </Link>
        </div>
      </section>

      {/* Crazy Creative Section: 3D Card Carousel */}
      <section className="relative z-10 py-20 sm:py-32 flex flex-col items-center px-4 sm:px-8">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-10 sm:mb-16 animate-fade-in text-center">What I Do</h2>
        <div className="w-full flex justify-center overflow-x-auto pb-4">
          <div className="carousel-3d flex gap-4 sm:gap-8 min-w-[900px] sm:min-w-0">
            <div className="carousel-card bg-gradient-to-br from-blue-800 to-fuchsia-800/80 text-white rounded-3xl shadow-2xl p-6 sm:p-10 mx-2 min-w-[260px] sm:min-w-[300px] max-w-xs transform rotate-y-[-20deg] hover:rotate-y-0 transition-transform duration-500 card-animated animate-float">
              <Brain className="w-10 h-10 sm:w-14 sm:h-14 mb-4 text-fuchsia-400 drop-shadow-neon" />
              <h3 className="text-xl sm:text-2xl font-bold mb-2">AI & Data Science</h3>
              <p className="text-white/80 text-sm sm:text-base">Building smart systems, ML models, and creative AI solutions for real-world impact.</p>
            </div>
            <div className="carousel-card bg-gradient-to-br from-cyan-800 to-blue-800/80 text-white rounded-3xl shadow-2xl p-6 sm:p-10 mx-2 min-w-[260px] sm:min-w-[300px] max-w-xs transform rotate-y-[0deg] hover:scale-105 transition-transform duration-500 card-animated animate-float-reverse">
              <BarChart className="w-10 h-10 sm:w-14 sm:h-14 mb-4 text-cyan-400 drop-shadow-neon" />
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Analytics & BI</h3>
              <p className="text-white/80 text-sm sm:text-base">Turning data into stories, dashboards, and actionable insights for business growth.</p>
            </div>
            <div className="carousel-card bg-gradient-to-br from-purple-800 to-blue-800/80 text-white rounded-3xl shadow-2xl p-6 sm:p-10 mx-2 min-w-[260px] sm:min-w-[300px] max-w-xs transform rotate-y-[20deg] hover:rotate-y-0 transition-transform duration-500 card-animated animate-float">
              <Code2 className="w-10 h-10 sm:w-14 sm:h-14 mb-4 text-blue-400 drop-shadow-neon" />
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Engineering</h3>
              <p className="text-white/80 text-sm sm:text-base">Designing robust software, cloud systems, and creative digital experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Callout */}
      <div className="relative z-10 py-10 sm:py-16 text-center px-4 sm:px-0">
        <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 animate-fade-in">Ready to create something extraordinary?</h3>
        <Link
          to="/contact"
          className="inline-block px-8 sm:px-12 py-4 sm:py-5 rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white text-lg sm:text-xl font-bold shadow-xl hover:scale-110 transition-transform button-animated animate-glow-pulse"
        >
          Let's Connect
        </Link>
      </div>
    </div>
  );
}

export default Home;