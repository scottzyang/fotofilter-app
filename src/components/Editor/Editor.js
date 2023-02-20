import ImageFilter from 'react-image-filter';
import { useOutletContext } from "react-router-dom";
import { useState } from 'react';

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
      <h1>Editor</h1>
      <button onClick={() => setFilter("duotone")}>Duotone</button>
      <button onClick={() => setFilter("invert")}>Invert</button>
      <button onClick={() => setFilter("grayscale")}>Grayscale</button>
      <button onClick={() => setFilter("sepia")}>Sepia</button>
      {filter && <button onClick={() => setFilter(undefined)}>Reset</button>}      
      { filter === 'duotone' && 
      <>
        <ImageFilter 
          image={URL.createObjectURL(selectedImage)}
          filter={filter}
          colorOne={ [redOne, greenOne, blueOne] }
          colorTwo={ [redTwo, greenTwo, blueTwo] }
        />
        <section className='color-one'>
          <h3>Color One Adjustment</h3>
          <div>
            <label for="one-red-adjust">Red</label>
            <input onChange={(e) => setRedOne(e.target.value)} id="one-red-adjust" name="one-red-adjust" type="range" min="0" max="255"/>
          </div>
          <div>
            <label for="one-green-adjust">Green</label>
            <input onChange={(e) => setGreenOne(e.target.value)} id="one-green-adjust" name="one-green-adjust" type="range" min="0" max="255"/>
          </div>
          <div>
            <label for="one-blue-adjust">Blue</label>
            <input onChange={(e) => setBlueOne(e.target.value)} id="one-blue-adjust" name="one-blue-adjust" type="range" min="0" max="255"/>
          </div>
        </section>
        <section className='color-two'>
          <h3>Color Two Adjustment</h3>
          <div>
            <label for="two-red-adjust">Red</label>
            <input onChange={(e) => setRedTwo(e.target.value)} id="two-red-adjust" name="two-red-adjust" type="range" min="0" max="255"/>
          </div>
          <div>
            <label for="two-green-adjust">Green</label>
            <input onChange={(e) => setGreenTwo(e.target.value)} id="two-green-adjust" name="two-green-adjust" type="range" min="0" max="255"/>
          </div>
          <div>
            <label for="two-blue-adjust">Blue</label>
            <input onChange={(e) => setBlueTwo(e.target.value)} id="two-blue-adjust" name="two-blue-adjust" type="range" min="0" max="255"/>
          </div>
        </section>
      </>
      }
      { filter !== 'duotone' &&       
      <ImageFilter 
        image={URL.createObjectURL(selectedImage)}
        filter={filter}
      />}
    </div>
  )
}

export default Editor
