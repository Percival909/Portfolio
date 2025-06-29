// Projects.js
import React from 'react';
import '../styles.css';

const projectsData = [
  {
    title: 'Smart Hybrid Water Filtration System',
    description: 'Engineered a hybrid-powered water filtration system with IoT sensors for real-time monitoring.',
    features: 'Smart energy switching, data analytics, remote control.',
  },
  {
    title: 'NLP Based Speech Recognition and Analysis System',
    description: 'Developed an AI system for speech recognition and emotion analysis.',
    features: 'Utilized Whisper, SpaCy, and deep learning techniques.',
  },
  {
    title: 'Personal Portfolio Website',
    description: 'Created a personal portfolio website to showcase my projects and skills.',
    features: 'Responsive design, smooth scrolling, and interactive elements.',
  },
  {
    title: 'E-commerce Web Application',
    description: 'Developed a full-stack e-commerce application with user authentication and payment integration.',
    features: 'Product listings, shopping cart, and order management.',
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      {projectsData.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p><strong>Features:</strong> {project.features}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
