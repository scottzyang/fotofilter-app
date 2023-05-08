/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react-hooks/exhaustive-deps */
import { useOutletContext, Link } from 'react-router-dom';

function Upload() {
  const [selectedImage, setSelectedImage] = useOutletContext()

  return(
    <section role="region" aria-label="Upload Your Own Image" class="flex flex-col justify-center items-center">
      <h1 class="text-xl m-2 font-semibold">Upload Your Own Image</h1>
      {!selectedImage &&
        <figure role="img" aria-label="No image selected" class="bg-gray-300 md:border-black md:border-4 w-500 h-500 md:rounded-2xl drop-shadow-2xl">
          <img src={`${process.env.PUBLIC_URL}/images/no-pictures.png`} alt="No image selected" width="400"/>
        </figure>
      }
      {selectedImage && (
        <figure role="img" aria-label="Selected image" class="bg-gray-300 border-black border-4 w-500 h-500 rounded-2xl drop-shadow-2xl">
          <img className="rounded-xl" alt="Selected image" width={"400px"} src={selectedImage} />
        </figure>
      )}
      <section class='m-4'>
        <label class="block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 file:text-violet-700
        hover:file:bg-violet-100">
          Upload Image
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
        </label>
      </section>
      <section class="m-8 flex flex-wrap justify-center sm:flex-nowrap">
        <Link
          role="button"
          aria-disabled={!selectedImage}
          style={!selectedImage ? { pointerEvents: "none" } : { pointerEvents: "" }}
          class={
            !selectedImage
              ? "border-black border-4 rounded-2xl py-2 px-4 bg-indigo-500/75 opacity-50 m-5"
              : "border-black border-4 rounded-2xl py-2 px-4 bg-indigo-500/75 hover:opacity-75 m-5"
          }
          to={`/editor`}
        >
          Start Editing!
        </Link>
        <button
          role="button"
          aria-disabled={!selectedImage}
          style={!selectedImage ? { pointerEvents: "none" } : { pointerEvents: "" }}
          class={
            !selectedImage
              ? "border-black border-4 rounded-2xl py-2 px-4 bg-indigo-500/75 opacity-50 m-5"
              : "border-black border-4 rounded-2xl py-2 px-4 bg-indigo-500/75 hover:opacity-75 m-5"
          }
          onClick={() => setSelectedImage(null)}
        >
          Remove
        </button>
      </section>
    </section>

  )
}

export default Upload
