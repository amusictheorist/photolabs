import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const sampleDataForPhotoListItem = props.photo;

  return (
    <div className="photo-list__item">
      <img src={sampleDataForPhotoListItem.imageSource} alt="user's photo" />
      <div className="photo-list__user-details">
        <img src={sampleDataForPhotoListItem.profile} alt="user's profile picture" />
      </div>
      <div className="photo-list__user-info">
        <div>{sampleDataForPhotoListItem.username}</div>
        <div className="photo-list__user-location">{sampleDataForPhotoListItem.location.city}, {sampleDataForPhotoListItem.location.country}</div>
      </div>
    </div>
  );
};

export default PhotoListItem;