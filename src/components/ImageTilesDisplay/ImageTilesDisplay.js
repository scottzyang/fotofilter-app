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
    <div className="flex flex-col justify-center items-center">
      
      {!selectedImage && 
        <>
          <h3>Selected Photo:</h3>
          <div className="bg-gray-300 border-black border-4 w-500 h-500 rounded-2xl">
            <img src={`${process.env.PUBLIC_URL}/images/no-pictures.png`} alt="selected" width="400"/>
          </div>
          <button className="border-black border-4 rounded-2xl py-2 px-4 bg-indigo-500/75 hover:opacity-75 m-5"><Link to={`/editor`}>Start Editing!</Link></button>
        </>
      }
    
      {selectedImage && 
        <>
          <h3>Selected Photo:</h3>
          <div className="border-black border-4 w-500 rounded-2xl">
            <img className="rounded-xl" src={selectedImage} alt="selected" width="400"/>
          </div>
          <button className="border-black border-4 rounded-2xl py-2 px-4 bg-indigo-500/75 hover:opacity-75 m-5"><Link to={`/editor`}>Start Editing!</Link></button>
        </>
      }
      <div className="grid grid-cols-4 gap-6">
        { imageGrid }
      </div>
    </div>
  )
}

export default ImageTilesDisplay
