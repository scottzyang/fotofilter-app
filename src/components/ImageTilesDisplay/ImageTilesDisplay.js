import React from "react";
import './ImageTilesDisplay.css'
import ImageTile from "../ImageTile/ImageTile";
import { useOutletContext } from "react-router-dom";
import data from '../../data.json'

function ImageTilesDisplay() {
  // eslint-disable-next-line no-unused-vars
  const [selectedImage, setSelectedImage] = useOutletContext()
  const imageGrid = data.map(({ title, imageUrl }) => {
    return (<ImageTile key={imageUrl} imageUrl={imageUrl} title={title} setSelectedImage={setSelectedImage}/>)
  })
  return (
    <div className="ImageTilesDisplay">
      { imageGrid }
    </div>
  )
}

export default ImageTilesDisplay
