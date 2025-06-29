// About.js
import React from 'react';
import '../styles.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p>
        I am a dedicated and passionate software engineer with a strong foundation in various programming languages and technologies. I have a keen interest in developing innovative solutions that solve real-world problems.
      </p>
      <p>
        My journey in technology began at a young age, and I have since honed my skills in web development, UI/UX design, and embedded systems. I thrive in collaborative environments and enjoy working on projects that challenge my abilities.
      </p>
      
      <div className="content-box">
        <h2>Education</h2>
        <p>
          I am currently pursuing a Bachelor of Science in Software Engineering from HTEC University, where I have gained a solid understanding of software development principles and practices.
        </p>
      </div>

      <div className="content-box">
        <h2>Professional Experience</h2>
        <p>
          I have completed internships and projects that have allowed me to apply my skills in real-world scenarios. My experience includes:
        </p>
        <ul>
          <li>React JS Intern at SelectaSol Software House</li>
          <li>Embedded Systems Engineer for various IoT projects</li>
          <li>NLP Specialist for AI-driven applications</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
