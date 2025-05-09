import React, { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

function Contact() {
  return (
    <section className="py-20 px-6 section-fade-in">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <a href="mailto:officialritwik098@gmail.com" className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600">
                <Mail className="w-5 h-5 mr-2" />
                officialritwik098@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/ritwik-singh-22b5a01b8" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn Profile
              </a>
              <a href="https://github.com/datasciritwik" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600">
                <Github className="w-5 h-5 mr-2" />
                GitHub Profile
              </a>
            </div>
          </div>
          
          {/* Modern Contact Form with Floating Labels and Success Message */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  };
  return submitted ? (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-green-600 text-2xl font-bold mb-2">Thank you!</div>
      <div className="text-gray-600 dark:text-gray-300">Your message has been sent.</div>
    </div>
  ) : (
    <form className="space-y-6" onSubmit={handleSubmit} autoComplete="off">
      <div className="floating-label">
        <input type="text" name="name" required placeholder=" " className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600" />
        <label>Name</label>
      </div>
      <div className="floating-label">
        <input type="email" name="email" required placeholder=" " className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600" />
        <label>Email</label>
      </div>
      <div className="floating-label">
        <textarea name="message" required rows={4} placeholder=" " className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600" />
        <label>Message</label>
      </div>
      <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:scale-105 button-animated shadow-lg">
        Send Message
      </button>
    </form>
  );
}

export default Contact;