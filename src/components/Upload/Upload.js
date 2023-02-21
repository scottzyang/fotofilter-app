/* eslint-disable react-hooks/exhaustive-deps */
import './Upload.css'
import { useOutletContext, Link } from 'react-router-dom';

function Upload() {
  const [selectedImage, setSelectedImage] = useOutletContext()

  return(
    <div className="flex flex-col justify-center items-center">
      <h1>Upload Your Own Image</h1>
      {!selectedImage && 
        <div className="bg-gray-300 border-black border-4 w-500 h-500 rounded-2xl">
          <img src={`${process.env.PUBLIC_URL}/images/no-pictures.png`} alt="selected" width="400"/>
        </div>
      }
      {selectedImage && (
        <div className="flex flex-col justify-center items-center">
          <img alt="Uploaded file not found" width={"400px"} src={selectedImage} />
          <button className="border-black border-4 rounded-2xl py-2 px-4 bg-indigo-500/75 hover:opacity-75 m-5" onClick={()=>setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <div className='m-4'>
        <input
          className="block w-full text-sm text-slate-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-violet-50 file:text-violet-700
          hover:file:bg-violet-100"
          type="file"
          accept="image/*"
          capture='user'
          name="myImage"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(URL.createObjectURL(event.target.files[0]));
          }}
        />
      </div>

      {selectedImage && <button className="border-black border-4 rounded-2xl py-2 px-4 bg-indigo-500/75 hover:opacity-75 m-5"><Link to={`/editor`}>Start Editing!</Link></button>}
    </div>
  )
}

export default Upload
