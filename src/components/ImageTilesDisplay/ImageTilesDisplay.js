import React from "react";
import './ImageTilesDisplay.css'
import ImageTile from "../ImageTile/ImageTile";
import data from '../data.json'

function ImageTilesDisplay() {
  const imageGrid = data.map(({ title, imageUrl }) => {
    return (<ImageTile imageUrl={imageUrl} title={title}/>)
  })
  return (
    <div>
      <p>Testing</p>
      { imageGrid }
    </div>
  )
}

export default ImageTilesDisplay
