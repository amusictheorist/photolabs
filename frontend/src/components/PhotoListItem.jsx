import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const photo = props.photo;

  return (
    <div className="photo-list__item">
      <img src={photo.imageSource} alt="user's photo" />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.profile} alt="user's profile picture" />
        <div className="photo-list__user-info">
          <div>{photo.username}</div>
          <div className="photo-list__user-location">{photo.location.city}, {photo.location.country}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;