import React from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';
import './App.scss';

const App = () => {
 
  return (
    <div className="App">
    {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
    <TopNavigationBar />
    <PhotoList />
  </div>
  );
};

export default App;