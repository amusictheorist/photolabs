import React, { useState } from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from 'components/PhotoListItem';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({ toggleModal, photo, favoritedPhotos, toggleFavorite, openModalWithPhoto }) => {
  const similarPhotos = photo.similar_photos;

  return (
    <div className="photo-details-modal" >
      <button onClick={toggleModal} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoFavButton isFavorited={favoritedPhotos.includes(photo.id)} onClick={() => toggleFavorite(photo.id)}/>
      <img
        onClick={() => openModalWithPhoto(photo)}
        className="photo-details-modal__image"
        src={photo.urls.regular}
        alt={`Photo taken by ${photo.user.username}`}
      />
        <header className='photo-details-modal__header'>Similar photos</header>
      <PhotoList
        className='photo-details-modal__images'
        photos={Object.values(similarPhotos)}
        favoritedPhotos={favoritedPhotos}
        toggleFavorite={toggleFavorite}
        openModalWithPhoto={() => {}}
      />
    </div>
  );
};

export default PhotoDetailsModal;
