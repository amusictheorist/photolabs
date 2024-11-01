import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const sampleDataForPhotoListItem = props.photo;

  return (
<div className="photo-list__item">
  <img src={sampleDataForPhotoListItem.imageSource} alt="test image" />
  <img src={sampleDataForPhotoListItem.profile} alt="profile pic" />
  
  <div className="photo-details">
    <span>{sampleDataForPhotoListItem.username}</span>
  </div>
  
  <div className="photo-location">
    <span>{sampleDataForPhotoListItem.location.city}, {sampleDataForPhotoListItem.location.country}</span>
  </div>
</div>
  );
};

export default PhotoListItem;
