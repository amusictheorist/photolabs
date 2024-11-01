import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [like, setLike] = useState(false);

  const handleClick = () => {
    setLike((currentLike) => !currentLike);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <FavIcon className={like ? "liked" : "unliked"} />
    </div>
  );
}

export default PhotoFavButton;