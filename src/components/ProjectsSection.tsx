import React, { useState, useEffect } from 'react';
import { MessageCircle, Bot, User, Code, Brain, Database, BarChart3, Zap, ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedMessages, setDisplayedMessages] = useState<any[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentText, setCurrentText] = useState('');

  const conversationData = [
    {
      type: 'user',
      text: "Tell me about your most innovative AI project",
      delay: 1000
    },
    {
      type: 'assistant',
      text: "I'd love to share **Hera Pheri** - my autonomous AI coding crew! It's a multi-agent system where specialized AI agents collaborate to complete entire software development tasks.",
      project: {
        title: "Hera Pheri AI Coding Crew",
        tech: ["LangGraph", "Python", "AI Agents", "Collaborative AI"],
        description: "Four specialized agents (Planner, Coder, Reviewer, Executor) work together autonomously to handle complex coding tasks from planning to execution.",
        icon: <Brain className="w-6 h-6" />,
        color: "from-emerald-400 to-blue-400"
      },
      delay: 2000
    },
    {
      type: 'user',
      text: "How does it work exactly?",
      delay: 1500
    },
    {
      type: 'assistant',
      text: "The system uses **LangGraph** to orchestrate agent collaboration. The Planner breaks down tasks, the Coder implements solutions, the Reviewer ensures quality, and the Executor handles deployment. It's like having a complete dev team that never sleeps! 🚀",
      delay: 2500
    },
    {
      type: 'user',
      text: "What about career-focused AI applications?",
      delay: 1200
    },
    {
      type: 'assistant',
      text: "That's where **ElevateCV** comes in! It's an AI-powered career assistant that revolutionizes how people approach job applications.",
      project: {
        title: "ElevateCV Career Assistant",
        tech: ["LangChain", "IBM Watson", "NLP", "Career Analytics"],
        description: "AI-powered resume optimization, skill-gap analysis, and automated cover letter generation using advanced NLP models.",
        icon: <User className="w-6 h-6" />,
        color: "from-blue-400 to-purple-400"
      },
      delay: 2200
    },
    {
      type: 'user',
      text: "Can you show me something with real-world business impact?",
      delay: 1800
    },
    {
      type: 'assistant',
      text: "Absolutely! The **HTS AI Trade Policy Agent** is a dual-function system I built for U.S. trade policy assistance. It combines RAG for policy Q&A and SQL for tariff calculations.",
      project: {
        title: "HTS AI Trade Policy Agent",
        tech: ["LangChain", "ChromaDB", "DuckDB", "RAG", "SQL"],
        description: "Dual-function agent providing U.S. trade policy Q&A through RAG and automated tariff/duty calculations through SQL queries.",
        icon: <Database className="w-6 h-6" />,
        color: "from-purple-400 to-pink-400"
      },
      delay: 2800
    },
    {
      type: 'user',
      text: "What about deep learning research?",
      delay: 1400
    },
    {
      type: 'assistant',
      text: "I built a **Vision Transformer (ViT) classifier** from scratch in PyTorch! It was fascinating to implement the attention mechanism and see how transformers revolutionized computer vision.",
      project: {
        title: "Vision Transformer Classifier",
        tech: ["PyTorch", "Vision Transformer", "Computer Vision", "Deep Learning"],
        description: "Custom implementation of Vision Transformer architecture with complete training pipeline for image classification tasks.",
        icon: <BarChart3 className="w-6 h-6" />,
        color: "from-pink-400 to-emerald-400"
      },
      delay: 2400
    },
    {
      type: 'user',
      text: "Any other interesting projects?",
      delay: 1600
    },
    {
      type: 'assistant',
      text: "I've also worked on **YouTube CTR prediction** using hybrid DistilBERT + ResNet models, built **interactive dashboards** for EV trends and Airbnb analytics, and created **predictive models** for airline referrals and fraud detection. Each project taught me something new about the intersection of AI and real-world problems! ✨",
      delay: 3000
    }
  ];

  useEffect(() => {
    if (currentMessageIndex < conversationData.length) {
      const currentMessage = conversationData[currentMessageIndex];
      const timer = setTimeout(() => {
        setIsTyping(true);
        
        // Simulate typing effect
        let charIndex = 0;
        const typingInterval = setInterval(() => {
          if (charIndex < currentMessage.text.length) {
            setCurrentText(currentMessage.text.slice(0, charIndex + 1));
            charIndex++;
          } else {
            clearInterval(typingInterval);
            setIsTyping(false);
            
            // Add complete message to displayed messages
            setDisplayedMessages(prev => [...prev, currentMessage]);
            setCurrentText('');
            setCurrentMessageIndex(prev => prev + 1);
          }
        }, 30);

        return () => clearInterval(typingInterval);
      }, currentMessage.delay);

      return () => clearTimeout(timer);
    }
  }, [currentMessageIndex]);

  const resetConversation = () => {
    setCurrentMessageIndex(0);
    setDisplayedMessages([]);
    setIsTyping(false);
    setCurrentText('');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2310b981%22 fill-opacity=%220.2%22%3E%3Cpath d=%22M20 20h20v20H20V20zm-20 0h20v20H0V20z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Project Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Let me walk you through my projects in an interactive conversation
          </p>
          
          {/* Control Buttons */}
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={resetConversation}
              className="px-6 py-2 bg-slate-700/50 text-gray-300 rounded-lg hover:bg-slate-600/50 transition-all duration-300 flex items-center space-x-2"
            >
              <Zap className="w-4 h-4" />
              <span>Restart Demo</span>
            </button>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden">
          {/* Chat Header */}
          <div className="bg-slate-700/50 px-6 py-4 border-b border-slate-600/50">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <div className="ml-4 flex items-center space-x-2">
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span className="text-white font-medium">Project Explorer AI</span>
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="p-6 max-h-96 overflow-y-auto space-y-6">
            {displayedMessages.map((message, index) => (
              <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-start space-x-3 max-w-4xl ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  {/* Avatar */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.type === 'user' 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                      : 'bg-gradient-to-r from-emerald-500 to-blue-500'
                  }`}>
                    {message.type === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>

                  {/* Message Content */}
                  <div className={`rounded-2xl px-4 py-3 ${
                    message.type === 'user' 
                      ? 'bg-blue-600/20 text-blue-100' 
                      : 'bg-slate-700/50 text-gray-100'
                  }`}>
                    <div className="text-sm leading-relaxed">
                      {message.text.split('**').map((part, i) => 
                        i % 2 === 1 ? <strong key={i} className="text-emerald-400">{part}</strong> : part
                      )}
                    </div>

                    {/* Project Card */}
                    {message.project && (
                      <div className="mt-4 p-4 bg-slate-800/50 rounded-xl border border-slate-600/30">
                        <div className="flex items-start space-x-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${message.project.color}`}>
                            {message.project.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-white mb-2">{message.project.title}</h4>
                            <p className="text-gray-400 text-sm mb-3">{message.project.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {message.project.tech.map((tech: string, techIndex: number) => (
                                <span
                                  key={techIndex}
                                  className="px-2 py-1 bg-slate-700/50 rounded-md text-xs text-emerald-400"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-3 max-w-4xl">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-slate-700/50 text-gray-100 rounded-2xl px-4 py-3">
                    <div className="text-sm leading-relaxed">
                      {currentText}
                      <span className="inline-block w-2 h-5 bg-emerald-400 ml-1 animate-pulse"></span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Completion Message */}
            {currentMessageIndex >= conversationData.length && !isTyping && (
              <div className="text-center py-8">
                <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full border border-emerald-400/30">
                  <Code className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Conversation Complete</span>
                </div>
                <p className="text-gray-400 mt-4">Want to explore more? Check out my GitHub or get in touch!</p>
                <div className="flex justify-center space-x-4 mt-6">
                  <a
                    href="https://github.com/datasciritwik"
                    className="flex items-center space-x-2 px-4 py-2 bg-slate-700/50 rounded-lg text-gray-300 hover:text-emerald-400 hover:bg-slate-600/50 transition-all duration-300"
                  >
                    <Code className="w-4 h-4" />
                    <span>View Code</span>
                  </a>
                  <button
                    onClick={resetConversation}
                    className="flex items-center space-x-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-all duration-300"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>Replay</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            {conversationData.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index < currentMessageIndex 
                    ? 'bg-emerald-400' 
                    : index === currentMessageIndex 
                    ? 'bg-blue-400 animate-pulse' 
                    : 'bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;