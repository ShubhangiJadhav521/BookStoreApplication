// Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>Book Search App &copy; {new Date().getFullYear()}</p>
        <p>
          Created by Your Name |{' '}
          <a href="https://shubhangi-portfolio-18.netlify.app/" target="_blank" rel="noopener noreferrer">
            Shubhangi Jadhav
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
