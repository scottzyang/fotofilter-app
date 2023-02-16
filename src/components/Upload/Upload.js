import './Upload.css'
import { useState } from 'react';

function Upload() {
  const [selectedImage, setSelectedImage] = useState(null);
  return(
    <div>
      <h1>Upload Your Own Image</h1>
      {selectedImage && (
        <div>
        <img alt="Uploaded file not found" width={"350px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button onClick={()=>setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  )
}

export default Upload
