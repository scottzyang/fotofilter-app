import './ImageTile.css';
import React from 'react';
import { Link } from 'react-router-dom';

function ImageTile({ imageUrl, title, setSelectedImage }) {
  return(
    <div className='ImageTile'>
      <Link onClick={() => setSelectedImage(`images/${imageUrl}`)}>
        <img className="border-black border-4 rounded-2xl hover:opacity-75" width="300" src={`${process.env.PUBLIC_URL}/images/${imageUrl}`} alt={title}/>
      </Link>
    </div>
  )
}

export default ImageTile
