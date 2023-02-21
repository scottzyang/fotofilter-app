import React from 'react';
import { useState } from 'react';
import { Outlet, } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import './App.css';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="App">
      <NavBar />
      <Outlet context={[selectedImage, setSelectedImage]}/>
      {console.log(selectedImage)}
    </div>
  );
}

export default App;

