import React from 'react';

const FavoritesList = ({ favorites, onSelect, onRemove }) => {
  return (
    <div className="favorites-list">
      <h3>Favorite Cities</h3>
      <ul>
        {favorites.map((city, index) => (
          <li key={index}>
            <span onClick={() => onSelect(city)}>{city}</span>
            <button onClick={() => onRemove(city)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;
