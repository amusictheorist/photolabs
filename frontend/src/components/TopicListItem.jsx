import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, fetchPhotosByTopic }) => {
  const topicId = topic.id;

  const handleClick = () => {
    fetchPhotosByTopic(topicId);
  };

  return (
    <div className="topic-list__item" onClick={handleClick}>
      {topic.title}
    </div>
  );
};

export default TopicListItem;
