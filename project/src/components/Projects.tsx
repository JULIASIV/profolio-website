import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Cpu, Gauge } from 'lucide-react';

const projects = [
  {
    title: 'High-Performance Trading Platform',
    description: 'Low latency C++ trading system enabling real-time communication between customers and buyers. Features sub-millisecond order matching and execution.',
    category: 'Systems',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    tech: ['C++', 'Multi-threading', 'Network Programming', 'Order Matching Engine'],
    github: '#',
    demo: '#',
    highlights: [
      'Sub-millisecond order execution',
      'Real-time price updates',
      'High-throughput message processing',
      'Fault-tolerant architecture'
    ]
  },
  {
    title: 'AI-Powered Robotics System',
    description: 'Autonomous system for industrial applications using advanced AI algorithms',
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
    tech: ['Python', 'TensorFlow', 'ROS'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Drone Surveillance System',
    description: 'AI-based drone surveillance system developed during INSA internship',
    category: 'Robotics',
    image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80',
    tech: ['Python', 'Computer Vision', 'Deep Learning'],
    github: '#',
    demo: '#'
  },
  {
    title: '3D Molecular Modeling AI',
    description: 'Deep learning for DNA and RNA structure prediction',
    category: 'Research',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
    tech: ['PyTorch', 'Molecular Dynamics', 'Python'],
    github: '#',
    paper: '#'
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const categories = ['All', 'Systems', 'AI', 'Robotics', 'Research'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Projects & Research</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full transition-all transform hover:scale-105 ${
                  filter === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                {project.category === 'Systems' && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full flex items-center gap-2">
                    <Gauge size={16} />
                    <span className="text-sm">High Performance</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                {project.highlights && (
                  <ul className="mb-4 space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <Cpu size={16} className="text-blue-600" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo || project.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>{project.demo ? 'Demo' : 'Paper'}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;