import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>homepage</h1>
      <Link to={`/select-image`}>Use Provided Images</Link>
      <Link to={`/upload-image`}>Upload Local Image</Link>
    </div>
  )
}

export default Home
