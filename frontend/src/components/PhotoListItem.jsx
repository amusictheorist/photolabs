import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const sampleDataForPhotoListItem = props.photo;

  return (
    <div>
      <img src={sampleDataForPhotoListItem.imageSource} alt="test image" />
      <img src={sampleDataForPhotoListItem.profile} alt="profile pic" />
    <span>{sampleDataForPhotoListItem.username}</span>
    <span>{sampleDataForPhotoListItem.location.city}, {sampleDataForPhotoListItem.location.country}</span>
  </div>
  );
};

export default PhotoListItem;
