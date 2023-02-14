import './ImageTile.css';
import React from 'react';
import { Link } from 'react-router-dom';

function ImageTile({ imageUrl, title }) {
  return(
    <div className='ImageTile'>
      <Link>
        <img src={`${process.env.PUBLIC_URL}/images/${imageUrl}`} alt={title}/>
      </Link>
    </div>
  )
}

export default ImageTile
