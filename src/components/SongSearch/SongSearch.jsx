// SongSearch.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SongSearch.css';
import SingerProfiles from '../SingerProfiles/SingerProfiles';

const SongSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [topTrending, setTopTrending] = useState([]);

  useEffect(() => {
    fetchTopTrending();
  }, []);

  const fetchTopTrending = async () => {
    try {
      const response = await axios.get(
        'https://itunes.apple.com/us/rss/topsongs/limit=4/json'
      );
      setTopTrending(response.data.feed.entry);
    } catch (error) {
      console.error('Error fetching top trending data:', error);
    }
  };

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
      // Scroll to the search results section after fetching data
      const searchResultsSection = document.getElementById('search-results-section');
      if (searchResultsSection) {
        searchResultsSection.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div className="song-search-container">
      <div className="search">
        <div className="search-app">
        <div className="searchBox">
          <input
            type="text"
            placeholder="Search for a track..."
            className="searchInput"
            value={searchTerm}
            onChange={handleChange}
          />
          <button type="submit" className="searchButton" onClick={handleSubmit}>
            Search
          </button>
        </div>
        </div>
      </div>



<SingerProfiles/>

      <div className="top-trending-container">
        <h2>Top Trending</h2>
        <div className="top-trending-grid">
          {topTrending.map((song) => (
            <div key={song.id.attributes['im:id']} className="song-card">
              <img src={song['im:image'][2].label} alt={song['im:name'].label} />
              <div>
                <h3>{song['im:name'].label}</h3>
                <p>{song['im:artist'].label}</p>
                <audio controls className="audio-control">
                  <source src={song.link[1].attributes.href} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="search-results-section" className="search-results-container">
        <h2>Search Results</h2>
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
