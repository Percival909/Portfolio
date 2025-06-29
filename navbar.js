// Navbar.js
import React from 'react';
import '../styles.css';

const Navbar = ({ setActiveSection, activeSection }) => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a 
            onClick={() => setActiveSection('home')} 
            className={activeSection === 'home' ? 'active' : ''}
          >
            Home
          </a>
        </li>
        <li>
          <a 
            onClick={() => setActiveSection('about')} 
            className={activeSection === 'about' ? 'active' : ''}
          >
            About
          </a>
        </li>
        <li>
          <a 
            onClick={() => setActiveSection('skills')} 
            className={activeSection === 'skills' ? 'active' : ''}
          >
            Skills
          </a>
        </li>
        <li>
          <a 
            onClick={() => setActiveSection('projects')} 
            className={activeSection === 'projects' ? 'active' : ''}
          >
            Projects
          </a>
        </li>
        <li>
          <a 
            onClick={() => setActiveSection('contact')} 
            className={activeSection === 'contact' ? 'active' : ''}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
