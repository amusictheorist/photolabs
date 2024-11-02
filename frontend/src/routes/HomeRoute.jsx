import React from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';

const HomeRoute = ({ topics, photos, favoritedPhotos, toggleFavorite, openModalWithPhoto }) => {
  
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favoritedPhotos={favoritedPhotos}/>
      <PhotoList
        photos={photos}
        favoritedPhotos={favoritedPhotos}
        toggleFavorite={toggleFavorite}
        openModalWithPhoto={openModalWithPhoto}
      />
    </div>
  );
};

export default HomeRoute;