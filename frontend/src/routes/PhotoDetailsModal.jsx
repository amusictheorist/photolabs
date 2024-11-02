import React, { useState } from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from 'components/PhotoListItem';

const PhotoDetailsModal = ({ toggleModal, photo }) => {

  return (
    <div className="photo-details-modal">
      <button onClick={toggleModal} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoListItem photo={photo}/>
    </div>
  );
};

export default PhotoDetailsModal;
