import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const {
    toggleFavorite,
    toggleModal,
    openModalWithPhoto,
    favoritedPhotos,
    activePhoto,
    displayModal,
    photoData,
    topicData,
    loading,
    error
  } = useApplicationData();
 
  return (
    <div className="App">
      <HomeRoute
        photos={photoData}
        topics={topicData}
        favoritedPhotos={favoritedPhotos}
        toggleFavorite={toggleFavorite}
        openModalWithPhoto={openModalWithPhoto}
        loading={loading}
        error={error}
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