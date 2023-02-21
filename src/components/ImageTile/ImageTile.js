import './ImageTile.css';
import React from 'react';
import { Link } from 'react-router-dom';

function ImageTile({ imageUrl, title, setSelectedImage }) {
  return(
    <div className='ImageTile'>
      <Link onClick={() => setSelectedImage(`images/${imageUrl}`)}>
        <img src={`${process.env.PUBLIC_URL}/images/${imageUrl}`} alt={title}/>
      </Link>
    </div>
  )
}

export default ImageTile
