// PhotoListItem.jsx
import React from 'react';

const PhotoListItem = ({ imageUrl, city, country, userName, userProfile }) => (
  <li className="photo-list-item">
    <img src={imageUrl} alt={`${city}, ${country}`} />
    <div>
      <p>{city}, {country}</p>
      <p><strong>{userName}</strong></p>
      <img src={userProfile} alt={userName} />
    </div>
  </li>
);

export default PhotoListItem;