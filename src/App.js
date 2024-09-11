import React from 'react';
import './UnderConstruction.css';

const App = () => {
  return (
    <div className="under-construction">
      <h1 className="aryo-text">Aryo</h1>
      <div className="content">
        <h2>Under Construction</h2>
        <p>We're working hard to bring you something amazing. Please check back soon!</p>
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
        <p>In the meantime, check out my <a href="https://speedtest.aryo.ai/" target="_blank" rel="noopener noreferrer">speedtest</a>.</p>
      </div>
    </div>
  );
};

export default App;