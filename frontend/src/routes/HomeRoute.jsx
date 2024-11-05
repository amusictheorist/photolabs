import React from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';

const HomeRoute = ({ topics, photos, favoritedPhotos, toggleFavorite, openModalWithPhoto, fetchPhotosByTopic }) => {
  return (
    <div className="home-route">
      <TopNavigationBar 
        topics={topics} 
        favoritedPhotos={favoritedPhotos} 
        fetchPhotosByTopic={fetchPhotosByTopic} 
      />
      <PhotoList
        photos={photos}
        favoritedPhotos={favoritedPhotos}
        toggleFavorite={toggleFavorite}
        openModalWithPhoto={openModalWithPhoto}
        fetchPhotosByTopic={fetchPhotosByTopic}
      />
    </div>
  );
};

export default HomeRoute;
