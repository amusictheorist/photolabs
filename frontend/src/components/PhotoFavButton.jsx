import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [like, setLike] = useState(false);

  const handleClick = () => {
    console.log('clicked!');
    setLike(!like);
  };

  const iconClass = like ? 'photo-list__fav-icon-svg' : 'photo-list__fav-icon';

  return (
    <div onClick={handleClick} className={iconClass}>
      <FavIcon />
    </div>
  );
}

export default PhotoFavButton;