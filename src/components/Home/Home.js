import React from "react";
import './Home.css'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>homepage</h1>
      <div className="button">
        <Link to={`/select-image`}><img className="image-button" width="200" src={`${process.env.PUBLIC_URL}/images/select-image.png`} alt="upload"/></Link>
      </div>
      <br/>
      <div className="button">
        <Link to={`/upload-image`}><img className="image-button" width="200"src={`${process.env.PUBLIC_URL}/images/upload.png`} alt="upload"/></Link>
      </div>
    </div>
  )
}

export default Home
