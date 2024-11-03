import { useState } from "react";

const useApplicationData = () => {

  const [favoritedPhotos, setFavoritedPhotos] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);
  const [activePhoto, setActivePhoto] = useState(null);
  
  const toggleFavorite = (photoId) => {
    setFavoritedPhotos((prevFavorites) => {
      if (prevFavorites.includes(photoId)) {
        return prevFavorites.filter((id) => id !== photoId);
      } else {
        return [...prevFavorites, photoId];
      }
    });
  };
  
  const toggleModal = () => {
    setDisplayModal(!displayModal);
  };
  
  const openModalWithPhoto = (photo) => {
    setDisplayModal(!displayModal);
    setActivePhoto(photo);
  };

  return { toggleFavorite, toggleModal, openModalWithPhoto, favoritedPhotos, activePhoto, displayModal };
};

export default useApplicationData;