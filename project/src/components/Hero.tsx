import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Sun, Moon } from 'lucide-react';
import ThreeBackground from './ThreeBackground';

const Hero = ({ isDarkMode, toggleTheme }: { isDarkMode: boolean; toggleTheme: () => void }) => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 18) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');
  }, []);

  return (
    <section className={`min-h-screen flex flex-col justify-center items-center relative ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    } transition-colors duration-300`}>
      <ThreeBackground />
      <button
        onClick={toggleTheme}
        className={`absolute top-4 right-4 p-2 rounded-full ${
          isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
        } shadow-lg hover:scale-110 transition-transform`}
      >
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg mb-4 text-blue-500"
        >
          {greeting}, Welcome to My Portfolio
        </motion.p>

        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Abenezer Markos
        </h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-xl md:text-2xl mb-8 text-blue-400">
            Material Science & Engineering | AI | Robotics | Computational Modeling
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex gap-6 justify-center mb-12"
        >
          <a 
            href="https://github.com/JULIASIV" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-400 transition-colors transform hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://linkedin.com/in/abenezer-markos-b87131351" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-400 transition-colors transform hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:abnn7359@gmail.com" 
            className="hover:text-blue-400 transition-colors transform hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex gap-4 justify-center"
        >
          <a 
            href="#projects" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all hover:scale-105"
          >
            View Projects
          </a>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            className="border border-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-medium transition-all hover:scale-105"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8"
      >
        <ChevronDown size={32} className="animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;