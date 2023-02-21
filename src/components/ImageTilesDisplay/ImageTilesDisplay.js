import React from "react";
import './ImageTilesDisplay.css'
import ImageTile from "../ImageTile/ImageTile";
import { useOutletContext, Link } from "react-router-dom";
import data from '../../data.json'

function ImageTilesDisplay() {
  // eslint-disable-next-line no-unused-vars
  const [selectedImage, setSelectedImage] = useOutletContext()
  const imageGrid = data.map(({ title, imageUrl }) => {
    return (<ImageTile key={imageUrl} imageUrl={imageUrl} title={title} setSelectedImage={setSelectedImage}/>)
  })
  return (
    <div className="ImageTilesDisplay">
      
      {selectedImage && 
        <>
          <h3>Selected Photo:</h3>
          <img src={selectedImage} alt="selected" width="500"/>
          <br/>
          <button><Link to={`/editor`}>Start Editing!</Link></button>
        </>
      }
      <div className="image-grid">
        { imageGrid }
      </div>
    </div>
  )
}

export default ImageTilesDisplay
