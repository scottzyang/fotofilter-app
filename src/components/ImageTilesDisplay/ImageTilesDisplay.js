/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/no-redundant-roles */
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
  <div role="region" aria-label="Image tiles" className="image-tiles flex justify-center h-full">
    <section aria-label="Selected Photo" className="selected-image">
      {!selectedImage && (
        <>
          <h3 className="text-xl m-4 font-semibold">Selected Photo:</h3>
          <figure role="img" aria-label="No image selected" className="image-selection bg-gray-300 border-black border-4 rounded-2xl mx-4 drop-shadow-2xl">
            <img src={`${process.env.PUBLIC_URL}/images/no-pictures.png`} alt="No image selected" width="400"/>
          </figure>
        </>
      )}

      {selectedImage && (
        <>
          <h3 className="text-xl m-4 font-semibold">Selected Photo:</h3>
          <figure role="img" aria-label="Selected image" className="image-selection border-black border-4 w-500 rounded-2xl mx-4">
            <img className="rounded-xl" src={selectedImage} alt="Selected image" width="400"/>
          </figure>
        </>
      )}

      <section className="m-8 flex flex-col sm:flex-row sm:items-center sm:justify-center">
        <Link
          role="button"
          aria-label="Start editing selected image"
          style={!selectedImage ? {pointerEvents: 'none'} : {pointerEvents: ''}}
          className={!selectedImage ? "border-black border-4 rounded-2xl py-2 px-4 bg-indigo-500/75 opacity-50 m-5 text-xs md:text-base" : "border-black border-4 rounded-2xl py-2 px-4 bg-indigo-500/75 hover:opacity-75 m-5 text-xs md:text-base"}
          to={`/editor`}
        >
          Start Editing!
        </Link>
        <button
          role="button"
          aria-label="Remove selected image"
          disabled={!selectedImage}
          className={!selectedImage ? "border-black border-4 rounded-2xl py-2 px-4 bg-indigo-500/75 opacity-50 m-5 text-xs md:text-base" : "border-black border-4 rounded-2xl py-2 px-4 bg-indigo-500/75 hover:opacity-75 m-5 text-xs md:text-base"}
          onClick={() => setSelectedImage(null)}
        >
          Remove
        </button>
      </section>
    </section>

    <section aria-label="Photo Selection" className="flex flex-col items-center">
      <h3 className="text-xl m-4 font-semibold">Photo Selection:</h3>
      <section aria-label="Image tiles grid" className="tiles-display border-black border-4 rounded-2xl grid grid-cols-2 gap-2 overflow-y-scroll bg-gray-300 drop-shadow-2xl">
        { imageGrid }
      </section>
    </section>
  </div>
  )
}

export default ImageTilesDisplay
