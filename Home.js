// Home.js
import React from 'react';
import '../styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to My Portfolio</h1>
      <p>
        I am Zawar Ahmed, an aspiring Software Engineer with expertise in various fields including Web Development, UI/UX Design, and Embedded Systems.
      </p>
      <p>
        My goal is to create innovative solutions that enhance user experiences and drive efficiency. I am passionate about technology and continuously seek to improve my skills.
      </p>
      
      <div className="content-box">
        <h2>My Projects</h2>
        <p>
          I have worked on several projects that showcase my skills in software development. Some of my notable projects include:
        </p>
        <ul>
          <li>Smart Hybrid Water Filtration System</li>
          <li>NLP Based Speech Recognition System</li>
          <li>Real-time Data Visualization Dashboard</li>
        </ul>
      </div>

      <div className="content-box">
        <h2>My Interests</h2>
        <p>
          Outside of programming, I enjoy various activities that help me relax and recharge. My interests include:
        </p>
        <ul>
          <li>Traveling to new places</li>
          <li>Playing Chess</li>
          <li>Badminton and other sports</li>
          <li>Designing and E-Gaming</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
