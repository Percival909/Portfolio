// Skills.js
import React from 'react';
import '../styles.css';

const skillsData = [
  { skill: 'React JS', level: 90 },
  { skill: 'Figma', level: 80 },
  { skill: 'Adobe Photoshop', level: 85 },
  { skill: 'Flutter', level: 75 },
  { skill: 'Python', level: 85 },
  { skill: 'Arduino IDE', level: 70 },
  { skill: 'SQL', level: 80 },
  { skill: 'JavaScript', level: 90 },
  { skill: 'Adobe Illustrator', level: 75 }, // New skill
  { skill: 'HTML/CSS', level: 90 }, // New skill
  { skill: 'ESP32', level: 70 }, // New skill
  { skill: 'C++', level: 80 }, // New skill
  { skill: 'Java', level: 75 }, // New skill
  { skill: 'MATLAB', level: 65 }, // New skill
  { skill: 'Power BI', level: 70 }, // New skill
  { skill: 'Microsoft SQL Server', level: 75 }, // New skill
  { skill: 'Jupyter Notebook', level: 70 }, // New skill
  { skill: 'Scikit-learn', level: 65 }, // New skill
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <p>Here are some of the skills I have developed over the years:</p>
      {skillsData.map((skill, index) => (
        <div key={index} className="skill">
          <span>{skill.skill}</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${skill.level}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
