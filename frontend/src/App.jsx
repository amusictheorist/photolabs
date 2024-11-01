import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const App = () => {
  const photo = {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  };
  const photos = Array.from({ length: 3 }, () => photo);
 
  return (
    <div className="App">
      {photos.map((_, i) => (
        <PhotoListItem key={i} photo={photo} />
      ))}
    </div>
  );
};

export default App;