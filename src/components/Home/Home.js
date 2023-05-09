import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
<section classNameName="flex justify-center">
  <section className="home-button grid gap-14 grid-cols-1 md:grid-cols-[300px_300px] m-12" role="group" >
    <section className="flex flex-col justify-center">
      <h2 id="select-image-heading" className="font-sans m-4 text-xl font-semibold">Select an Image</h2>
      <section className="bg-yellow-100 border-black border-4 rounded-2xl w-84 hover:opacity-75 drop-shadow-2xl">
        <Link to="/select-image" aria-labelledby="select-heading select-desc"><img className="image-button" width="300" src={`${process.env.PUBLIC_URL}/images/select-image.png`} alt="Select from Options"/></Link>
        <p id="select-image-desc" className="sr-only">Click to select an image</p>
      </section>
    </section>
    <section className="flex flex-col justify-center">
      <h2 id="upload-image-heading" className="font-sans m-4 text-xl font-semibold">Upload an Image</h2>
      <section className="bg-yellow-100 border-black border-4 rounded-2xl w-84 hover:opacity-75 drop-shadow-2xl">
        <Link to="/upload-image" aria-labelledby="upload-heading upload-desc"><img className="image-button" width="300" src={`${process.env.PUBLIC_URL}/images/upload.png`} alt="Upload from Computer"/></Link>
        <p id="upload-image-desc" className="sr-only">Click to upload an image</p>
      </section>
    </section>
  </section>
</section>

  )
}

export default Home
