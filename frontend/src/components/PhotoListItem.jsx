import React from "react";
import '../styles/PhotoListItem.scss';
import FavIcon from "./FavIcon";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const photo = props.photo;
  
  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img className="photo-list__image" src={photo.urls.regular} alt="user's photo" />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.user.profile} alt="user's profile" />
        <div className="photo-list__user-info">
          <span>{photo.user.username}</span>
          <div className="photo-list__user-location">
            <span>{photo.location.city}, {photo.location.country}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoListItem;