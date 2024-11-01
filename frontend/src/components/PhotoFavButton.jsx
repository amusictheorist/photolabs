import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [like, setLike] = useState(false);

  const handleClick = () => {
    setLike(!like);
  };

  const iconClass = like ? 'photo-list__fav-icon-svg' : 'photo-list__fav-icon';

  return (
    <div className={iconClass}>
      <FavIcon onClick={handleClick} liked={like} />
    </div>
  );
}

export default PhotoFavButton;