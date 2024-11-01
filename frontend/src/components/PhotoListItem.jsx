import React from "react";

const PhotoListItem = (props) => {
  const photo = props.photo;
  
  return (
    <div>
      <img src={photo.imageSource} alt="user's photo" />
      <div>
        <img src={photo.profile} alt="user's profile" />
        <div>
        <span>{photo.username}</span>
        </div>
        <div>
        <span>{photo.location.city}, {photo.location.country}</span>
        </div>
      </div>
    </div>
  );
}

export default PhotoListItem;