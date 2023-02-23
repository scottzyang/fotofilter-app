import React from "react";
import './Home.css'
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="flex justify-center">
      <section className="home-button grid gap-14 grid-cols-[300px_300px] m-12">
        <section className="flex flex-col justify-center">
          <p className="font-sans m-4 text-xl font-semibold">Select an Image</p>
          <section className="bg-yellow-100 border-black border-4 rounded-2xl w-84 hover:opacity-75">
            <Link to={`/select-image`}><img className="image-button" width="300" src={`${process.env.PUBLIC_URL}/images/select-image.png`} alt="upload"/></Link>
          </section>
        </section>
        <section className="flex flex-col justify-center">
          <p className="font-sans m-4 text-xl font-semibold">Upload an Image</p>
          <section className="bg-yellow-100 border-black border-4 rounded-2xl w-84 hover:opacity-75">
            <Link to={`/upload-image`}><img className="image-button" width="300"src={`${process.env.PUBLIC_URL}/images/upload.png`} alt="upload"/></Link>
          </section>
        </section>
      </section>
    </section>
  )
}

export default Home
