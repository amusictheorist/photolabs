import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const App = () => {
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);
  const [activePhoto, setActivePhoto] = useState(null);

  const toggleFavorite = (photoId) => {
    setFavoritedPhotos((prevFavorites) => {
      if (prevFavorites.includes(photoId)) {
        return prevFavorites.filter((id) => id !== photoId);
      } else {
        return [...prevFavorites, photoId];
      }
    });
  };

  const toggleModal = () => {
    setDisplayModal(!displayModal);
  };

  const openModalWithPhoto = (photo) => {
    setDisplayModal(!displayModal);
    setActivePhoto(photo);
  };
 
  return (
    <div className="App">
      <HomeRoute
      photos={photos}
      topics={topics}
      favoritedPhotos={favoritedPhotos}
      toggleFavorite={toggleFavorite}
      openModalWithPhoto={openModalWithPhoto}
      />
      {displayModal &&
      <PhotoDetailsModal
      photo={activePhoto}
      toggleModal={toggleModal}
      favoritedPhotos={favoritedPhotos}
      toggleFavorite={toggleFavorite}
      />}
  </div>
  );
};

export default App;