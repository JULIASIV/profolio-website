import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Professional workspace"
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700">
              I am a dual major in Material Science & Engineering with a Minor in Economics at ASTU, 
              passionate about pushing the boundaries of technology through AI, robotics, and computational modeling.
            </p>

            <p className="text-lg text-gray-700">
              My expertise spans across AI-driven automation, deep learning, and high-performance computing, 
              with a particular focus on developing innovative solutions that bridge the gap between theoretical research 
              and practical applications.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Education & Certifications</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Google Generative AI Certification</li>
                <li>Handong Generative AI & ChatGPT Program</li>
                <li>ALX Data Science Program (In Progress)</li>
                <li>UNESCO UNITWIN AI & Data Labeling Bootcamp</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;