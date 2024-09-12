import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Ensure Bootstrap JS is imported
import './UnderConstruction.css';

const App = () => {
  const [progress, setProgress] = useState(0); // Start progress at 0

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setTimeout(() => setProgress(0), 500); // Wait 500ms before resetting to 0
          return 100; // Hold at 100% before resetting
        }
        return prev + 1; // Increment by 1% until 100%
      });
    }, 50); // Increase by 1% every 50ms

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="under-construction d-flex flex-column justify-content-center align-items-center min-vh-100 py-3">
      <h1 className="aryo-text mb-3 mb-md-4">Aryo</h1>
      <div className="content bg-white bg-opacity-10 p-3 p-md-4 rounded-3 w-100 max-width-md">
        <h2 className="mb-3">Under Construction</h2>
        <p className="mb-3">We're working hard to bring you something amazing. Please check back soon!</p>
        <div className="progress mb-3">
          <div className="progress-bar bg-success progress-bar-striped progress-bar-animated"
               role="progressbar"
               style={{ width: `${progress}%` }}
               aria-valuenow={progress}
               aria-valuemin="0"
               aria-valuemax="100">
          </div>
        </div>
        <p className="mb-0">In the meantime, check out my <a href="https://speedtest.aryo.ai/" target="_blank" rel="noopener noreferrer">speedtest</a>.</p>
      </div>
    </div>
  );
};

export default App;
