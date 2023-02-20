import ImageFilter from 'react-image-filter';
import { useOutletContext } from "react-router-dom";
import { useState } from 'react';

function Editor() {
  // eslint-disable-next-line no-unused-vars
  const [selectedImage, setSelectedImage] = useOutletContext()
  // eslint-disable-next-line no-unused-vars
  const [filter, setFilter] = useState(undefined)
  // eslint-disable-next-line no-unused-vars
  const [redOne, setRedOne] = useState(undefined)

  return(
    <div style={{ width:'500px', margin: 'auto' }}>
      <h1>Editor Test</h1>
      { filter === 'duotone' && 
      <ImageFilter 
        image={URL.createObjectURL(selectedImage)}
        filter={filter}
        colorOne={ [168, 25, 200] }
        colorTwo={ [160, 178, 10] }
      />}
      { filter !== 'duotone' &&       
      <ImageFilter 
        image={URL.createObjectURL(selectedImage)}
        filter={filter}
      />}

      <button onClick={() => setFilter("duotone")}>Duotone</button>
      <button onClick={() => setFilter("invert")}>Invert</button>
      <button onClick={() => setFilter("grayscale")}>Grayscale</button>
      <button onClick={() => setFilter("sepia")}>Sepia</button>
      {filter && <button onClick={() => setFilter(undefined)}>Reset</button>}
      <div>
        <label for="red-adjust">Red</label>
        <input id="red-adjust" name="red-adjust" type="range" min="0" max="255"/>
      </div>
      <div>
        <label for="green-adjust">Green</label>
        <input id="green-adjust" name="green-adjust" type="range" min="0" max="255"/>
      </div>
      <div>
        <label for="blue-adjust">Blue</label>
        <input id="blue-adjust" name="blue-adjust" type="range" min="0" max="255"/>
      </div>
    </div>
  )
}

export default Editor
