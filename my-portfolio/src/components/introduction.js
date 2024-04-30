// Introduction.js

import React from 'react';
import '../Introduction.css'; // Import CSS file for styling

const Introduction = () => {
  return (
    <section id="introduction" className="introduction">
      <div className="container">
        <div className="intro-content">
          <div className="intro-image-container">
            <img src="/abhinav.JPG" alt="Abhinav Rajaram" className="intro-image" />
          </div>
          <div className="intro-text">
            <h1>Welcome to My Portfolio</h1>
            <p>Hi, I'm Abhinav Rajaram.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
