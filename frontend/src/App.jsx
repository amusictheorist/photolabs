import React from 'react';
import PhotoList from 'components/PhotoList';
import './App.scss';
import TopicList from 'components/TopicList';

const App = () => {
 
  return (
    <div className="App">
    {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
    <TopicList />
    <PhotoList />
  </div>
  );
};

export default App;