import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const App = () => {
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);

  const toggleFavorite = (photoId) => {
    setFavoritedPhotos((prevFavorites) => {
      if (prevFavorites.includes(photoId)) {
        return prevFavorites.filter((id) => id !== photoId);
      } else {
        return [...prevFavorites, photoId];
      }
    });
  };

  const toggleModal= () => {
    setDisplayModal(!displayModal);
  };
 
  return (
    <div className="App">
      <HomeRoute
      photos={photos}
      topics={topics}
      favoritedPhotos={favoritedPhotos}
      toggleFavorite={toggleFavorite}
      toggleModal={toggleModal}
      />
      {displayModal && <PhotoDetailsModal toggleModal={toggleModal}/>}
  </div>
  );
};

export default App;