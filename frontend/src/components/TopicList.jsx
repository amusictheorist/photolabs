import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics, fetchPhotosByTopic }) => {
  
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem key={topic.id} topic={topic} fetchPhotosByTopic={fetchPhotosByTopic}/>
      ))}
    </div>
  );
};

export default TopicList;
