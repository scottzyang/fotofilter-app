import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex justify-center">
      <div className="grid gap-14 grid-cols-[300px_300px] m-12">
        <div className="flex flex-col justify-center">
          <p className="font-sans m-4 text-xl font-semibold">Select an Image</p>
          <div className="bg-yellow-100 border-black border-4 rounded-2xl w-84 hover:opacity-75">
            <Link to={`/select-image`}><img className="image-button" width="300" src={`${process.env.PUBLIC_URL}/images/select-image.png`} alt="upload"/></Link>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-sans m-4 text-xl font-semibold">Upload an Image</p>
          <div className="bg-yellow-100 border-black border-4 rounded-2xl w-84 hover:opacity-75">
            <Link to={`/upload-image`}><img className="image-button" width="300"src={`${process.env.PUBLIC_URL}/images/upload.png`} alt="upload"/></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
