import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => (
  
  <ul className="photo-list">
    {props.photos.map((photo) => (
      <PhotoListItem key={photo.id} photo={photo} />
    ))}
  </ul>
);

export default PhotoList;