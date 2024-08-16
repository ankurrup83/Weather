import React, { useState } from 'react';
import { getCitySuggestions } from '../utils/fetchWeather';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = () => {
    if (city) {
      onSearch(city);
      setCity('');
      setSuggestions([]);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setCity(value);

    if (value.length > 0) {
      const matches = getCitySuggestions(value);
      setSuggestions(matches);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setCity(suggestion);
    setSuggestions([]);
    onSearch(suggestion);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={city}
        onChange={handleChange}
        placeholder="Search for a city..."
      />
      <button onClick={handleSearch}>Search</button>
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li 
              key={index} 
              onClick={() => handleSuggestionClick(suggestion)}
              className="suggestion-item"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
