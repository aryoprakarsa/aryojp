import React from 'react';
import './App.css';
import constructionImage from './construction.png'; // add your construction image to src folder

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>We're Under Construction</h1>
        <p>Our site is currently under construction. Please check back soon!</p>
        <img src={constructionImage} alt="Under Construction" className="construction-image" />
      </header>
    </div>
  );
}

export default App;
