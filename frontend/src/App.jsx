import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const {
    toggleFavorite,
    toggleModal,
    openModalWithPhoto,
    favoritedPhotos,
    activePhoto,
    displayModal} = useApplicationData();
 
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