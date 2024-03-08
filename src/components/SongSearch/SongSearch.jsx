// SongSearch.js

import React, { useState } from 'react';
import axios from 'axios';
import './SongSearch.css';

const SongSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://itunes.apple.com/search?term=${searchTerm}&media=music&entity=song`
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (

    <div>
        <div className="serch">
        <div className="searchBox">
        <input
          type="text"
          placeholder="Search for a song..."
          className="searchInput"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit" className="searchButton" onClick={handleSubmit}>
          Search
        </button>
      </div>
        </div>
    <div className="song-search-container">
      
      <div className="song-grid">
        {searchResults.map((song) => (
          <div key={song.trackId} className="song-card">
            <img src={song.artworkUrl100} alt={song.trackName} />
            <div>
              <h3>{song.trackName}</h3>
              <p>{song.artistName}</p>
              <audio controls className="audio-control">
                <source src={song.previewUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
};

export default SongSearch;
