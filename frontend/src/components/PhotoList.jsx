import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, favoritedPhotos, toggleFavorite }) => (
  <ul className="photo-list">
    {photos.map((photo) => (
      <PhotoListItem
        key={photo.id}
        photo={photo}
        isFavorited={favoritedPhotos.includes(photo.id)}
        onToggleFavorite={() => toggleFavorite(photo.id)}
      />
    ))}
  </ul>
);

export default PhotoList;