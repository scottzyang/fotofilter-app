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
    <section className="image-tiles flex justify-center h-full">
      <section className="selected-image">
        {!selectedImage &&
          <>
            <h3 className="text-xl m-4 font-semibold">Selected Photo:</h3>
            <section className="image-selection bg-gray-300 border-black border-4 rounded-2xl mx-4 drop-shadow-2xl">
              <img src={`${process.env.PUBLIC_URL}/images/no-pictures.png`} alt="selected" width="400"/>
            </section>
          </>
        }

        {selectedImage &&
          <>
            <h3 className="text-xl m-4 font-semibold">Selected Photo:</h3>
            <section className="image-selection border-black border-4 w-500 rounded-2xl mx-4">
              <img className="rounded-xl" src={selectedImage} alt="selected" width="400"/>
            </section>
          </>
        }
        <section className="m-8">
          <Link style={!selectedImage ? {pointerEvents: 'none'} : {pointerEvents: ''}} className={!selectedImage ? "border-black border-4 rounded-2xl py-2 px-4 bg-indigo-500/75 opacity-50 m-5" : "border-black border-4 rounded-2xl py-2 px-4 bg-indigo-500/75 hover:opacity-75 m-5"} to={`/editor`}>Start Editing!</Link>
          <Link style={!selectedImage ? {pointerEvents: 'none'} : {pointerEvents: ''}} className={!selectedImage ? "border-black border-4 rounded-2xl py-2 px-4 bg-indigo-500/75 opacity-50 m-5" : "border-black border-4 rounded-2xl py-2 px-4 bg-indigo-500/75 hover:opacity-75 m-5"} onClick={() => setSelectedImage(null)}>Remove</Link>
        </section>
      </section>
      <section className="flex flex-col items-center">
        <h3 className="text-xl m-4 font-semibold">Photo Selection:</h3>
        <section className="tiles-display border-black border-4 rounded-2xl grid grid-cols-2 gap-2 overflow-y-scroll bg-gray-300 mx-4 drop-shadow-2xl">
          { imageGrid }
        </section>
      </section>
    </section>
  )
}

export default ImageTilesDisplay
