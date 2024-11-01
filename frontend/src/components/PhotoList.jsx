import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

const PhotoList = () => (
  
  <ul className="photo-list">
    {photos.map((photo) => (
      <PhotoListItem key={photo.id} photo={photo} />
    ))}
  </ul>
);

export default PhotoList;