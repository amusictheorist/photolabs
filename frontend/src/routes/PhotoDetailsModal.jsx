import React, { useState } from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from 'components/PhotoListItem';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({ toggleModal, photo, favoritedPhotos, toggleFavorite }) => {
  const similarPhotos = photo.similar_photos;

  return (
    <div className="photo-details-modal">
      <button onClick={toggleModal} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoListItem photo={photo}/>
      <header className='photo-details-modal__header'>Similar photos</header>
      <PhotoList
      className='photo-details-modal__images'
      photos={Object.values(similarPhotos)}
      favoritedPhotos={favoritedPhotos}
      toggleFavorite={toggleFavorite}/>
    </div>
  );
};

export default PhotoDetailsModal;
