import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import FavoritesList from './components/FavoritesList';
import { fetchWeather } from './utils/fetchWeather';
import './App.css';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleSearch = async (city) => {
    const data = await fetchWeather(city);
    if (!data.error) {
      setWeather(data);
    } else {
      alert(data.error);
    }
  };

  const addToFavorites = (city) => {
    if (!favorites.includes(city)) {
      const updatedFavorites = [...favorites, city];
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  const removeFromFavorites = (city) => {
    const updatedFavorites = favorites.filter(fav => fav !== city);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const handleFavoriteSelect = async (city) => {
    const data = await fetchWeather(city);
    if (!data.error) {
      setWeather(data);
    }
  };

  return (
    <div className="app">
      <h1>Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      <WeatherDisplay weather={weather} />
      {weather && (
        <button className="add-to-favorites" onClick={() => addToFavorites(weather.name)}>
          Add to Favorites
        </button>
      )}
      <FavoritesList 
        favorites={favorites} 
        onSelect={handleFavoriteSelect} 
        onRemove={removeFromFavorites} 
      />
    </div>
  );
};

export default App;
