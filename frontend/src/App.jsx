import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const App = () => {
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);

  const toggleFavorite = (photoId) => {
    setFavoritedPhotos((prevFavorites) => {
      if (prevFavorites.includes(photoId)) {
        return prevFavorites.filter((id) => id !== photoId);
      } else {
        return [...prevFavorites, photoId];
      }
    });
  };
 
  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} favoritedPhotos={favoritedPhotos} toggleFavorite={toggleFavorite}/>
      <PhotoDetailsModal />
  </div>
  );
};

export default App;