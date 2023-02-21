/* eslint-disable react-hooks/exhaustive-deps */
import './Upload.css'
import { useOutletContext, Link } from 'react-router-dom';

function Upload() {
  const [selectedImage, setSelectedImage] = useOutletContext()

  return(
    <div>
      <h1>Upload Your Own Image</h1>
      {selectedImage && (
        <div>
        <img alt="Uploaded file not found" width={"350px"} src={selectedImage} />
        <br />
        <button onClick={()=>setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />
     
      <br /> 
      <input
        type="file"
        accept="image/*"
        capture='user'
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(URL.createObjectURL(event.target.files[0]));
        }}
      />
      <br />
      <br />
      {selectedImage && <button><Link to={`/editor`}>Start Editing!</Link></button>}
    </div>
  )
}

export default Upload
