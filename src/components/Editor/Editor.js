import ImageFilter from 'react-image-filter';
import { useOutletContext } from "react-router-dom";
import { useState } from 'react';
import DuoColorDials from '../DuoColorDials/DuoColorDials';

function Editor() {
  // eslint-disable-next-line no-unused-vars
  const [selectedImage, setSelectedImage] = useOutletContext()
  const [filter, setFilter] = useState(undefined)

  // states for duotone color one RGB 
  const [redOne, setRedOne] = useState(168)
  const [greenOne, setGreenOne] = useState(25)
  const [blueOne, setBlueOne] = useState(200)

  // states for duotone color two RGB 
  const [redTwo, setRedTwo] = useState(160)
  const [greenTwo, setGreenTwo] = useState(178)
  const [blueTwo, setBlueTwo] = useState(10)

  return(
    <div style={{ width:'500px', margin: 'auto' }}>
      { filter === 'duotone' && 
      <div>
        <ImageFilter 
          image={selectedImage}
          filter={filter}
          colorOne={ [redOne, greenOne, blueOne] }
          colorTwo={ [redTwo, greenTwo, blueTwo] }
        />
        <DuoColorDials setRedOne={setRedOne} setGreenOne={setGreenOne} setBlueOne={setBlueOne} setRedTwo={setRedTwo} setGreenTwo={setGreenTwo} setBlueTwo={setBlueTwo}/>
      </div>
      }
      
      { filter !== 'duotone' &&       
      <ImageFilter 
        image={selectedImage}
        filter={filter}
      />}  
      {filter && <button className="border-black border-4 rounded-2xl py-1 px-4 bg-indigo-500/75 hover:opacity-75 m-2" onClick={() => setFilter(undefined)}>Reset</button>}    
      <button className="border-black border-4 rounded-2xl py-1 px-4 bg-indigo-500/75 hover:opacity-75 m-2" onClick={() => setFilter("duotone")}>Duotone</button>
      <button className="border-black border-4 rounded-2xl py-1 px-4 bg-indigo-500/75 hover:opacity-75 m-2" onClick={() => setFilter("invert")}>Invert</button>
      <button className="border-black border-4 rounded-2xl py-1 px-4 bg-indigo-500/75 hover:opacity-75 m-2" onClick={() => setFilter("grayscale")}>Grayscale</button>
      <button className="border-black border-4 rounded-2xl py-1 px-4 bg-indigo-500/75 hover:opacity-75 m-2" onClick={() => setFilter("sepia")}>Sepia</button>
    </div>
  )
}

export default Editor
