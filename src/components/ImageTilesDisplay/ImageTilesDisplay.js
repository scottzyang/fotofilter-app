import React from "react";
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
    <section className="flex justify-end">
      <section className="fixed left-36">
        {!selectedImage && 
          <>
            <h3 className="text-xl m-2 font-semibold">Selected Photo:</h3>
            <section className="bg-gray-300 border-black border-4 rounded-2xl">
              <img src={`${process.env.PUBLIC_URL}/images/no-pictures.png`} alt="selected" width="400"/>
            </section>
          </>
        }
      
        {selectedImage && 
          <>
            <h3 className="text-xl m-2 font-semibold">Selected Photo:</h3>
            <section className="border-black border-4 w-500 rounded-2xl">
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
        <h3 className="text-xl mr-24 mt-2 mb-2 font-semibold">Selected Photo:</h3>
        <section className="mr-24 grid grid-cols-2 gap-6 right-0">
          { imageGrid }
        </section>
      </section>
    </section>
  )
}

export default ImageTilesDisplay
