import React from 'react';
import headshot from '../images/headshot.png';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="intro-container">
        <h1>Hi, I'm [Name]</h1>
        <img src={headshot} alt="Headshot" />
      </div>
      <div className="description-container">
        <p>
          [Brand statement here]
        </p>
      </div>
    </div>
  );
}

export default Home;
