// Contact.js
import React from 'react';
import '../styles.css';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa'; // Importing icons from react-icons

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>If you would like to get in touch, feel free to reach out via the following methods:</p>
      
      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <p><a href="mailto:zawarahmed36@gmail.com">zawarahmed36@gmail.com</a></p>
        </div>
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <p><a href="tel:+92310576517">+92 310 576517</a></p>
        </div>
        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <p><a href="https://www.linkedin.com/in/zawar-ahmed-5q" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        </div>
      </div>

      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <p>I look forward to hearing from you!</p>
    </div>
  );
};

export default Contact;
