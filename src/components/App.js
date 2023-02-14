import React from 'react';
// import ImageFilter from 'react-image-filter';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
      /* <ImageFilter
        image='https://source.unsplash.com/random/1200x800'
        filter={ 'duotone' }
        colorOne={ [40, 250, 250] }
        colorTwo={ [250, 150, 0] }
      /> */
