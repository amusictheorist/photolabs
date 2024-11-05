import React from "react";
import '../styles/PhotoListItem.scss';
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photo, isFavorited, onToggleFavorite, openModalWithPhoto }) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton isFavorited={isFavorited} onClick={onToggleFavorite} />
      <img
        onClick={() => openModalWithPhoto(photo)}
        className="photo-list__image"
        src={photo.urls.regular}
        alt={`Photo taken by ${photo.user.username}`}
      />
      <div className="photo-list__user-details">
        <img 
          className="photo-list__user-profile" 
          src={photo.user.profile} 
          alt={`Profile picture of ${photo.user.username}`} 
        />
        <div className="photo-list__user-info">
          <span>{photo.user.username}</span>
          <div className="photo-list__user-location">
            <span>{photo.location.city}, {photo.location.country}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
