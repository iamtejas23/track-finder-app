// SingerProfiles.js

import React from 'react';
import './SingerProfiles.css';
import arijit from '../../assets/arijit.jpg';
import sherya from '../../assets/sherya.jpg';
import ajayatul from '../../assets/ajayatul.jpg';
import arya from '../../assets/arya.jpg';

const SingerProfiles = () => {
  return (
    <div className="singer-profiles-container">
      <h2>Top Singers</h2>
      <div className="singer-grid">
        {/* Placeholder for blank singer profiles */}
        <div className="singer-card">
            <div className="singer-card-image">
                <img src={arijit} alt="Artist Name" />
            </div>
            <div className="singer-card-info">
                <h3>Arijit Singh</h3>
                <p>Singer</p>
            </div>
        </div>
        <div className="singer-card">
            <div className="singer-card-image">
                <img src={sherya} alt="Artist Name" />
            </div>
            <div className="singer-card-info">
                <h3>Shreya Ghoshal</h3>
                <p>Singer</p>
            </div>
        </div>
        <div className="singer-card">
            <div className="singer-card-image">
                <img src={ajayatul} alt="Artist Name" />
            </div>
            <div className="singer-card-info">
                <h3>Ajay Atul</h3>
                <p>Singers</p>
            </div>
        </div>
        <div className="singer-card">
            <div className="singer-card-image">
                <img src={arya} alt="Artist Name" />
            </div>
            <div className="singer-card-info">
                <h3>
Aarya Ambekar</h3>
                <p>Singer</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SingerProfiles;
