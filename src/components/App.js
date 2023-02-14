import React from 'react';
import ImageFilter from 'react-image-filter';
import './App.css';

function App() {
  return (
    <div className="App">
        <ImageFilter
        image='https://source.unsplash.com/random/1200x800'
        filter={ 'duotone' }
        colorOne={ [40, 250, 250] }
        colorTwo={ [250, 150, 0] }
      />

    </div>
  );
}

export default App;
