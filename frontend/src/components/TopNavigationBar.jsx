import React from 'react';
import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({ favoritedPhotos, topics, fetchPhotosByTopic }) => {
  const isFavPhotoExist = favoritedPhotos.length > 0;

  return (
    <header className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} fetchPhotosByTopic={fetchPhotosByTopic} />
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </header>
  );
};

export default TopNavigation;
