import ImageFilter from 'react-image-filter';
import './Editor.css'
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
    <section className="md:w-9/12 flex flex-col justify-center m-auto md:flex-row">
      { filter === 'duotone' &&
        <section className='md:border-black md:border-8 mt-8'>
          <ImageFilter
            image={selectedImage}
            filter={filter}
            colorOne={ [redOne, greenOne, blueOne] }
            colorTwo={ [redTwo, greenTwo, blueTwo] }
          />
        </section>
      }

      { filter !== 'duotone' &&
        <section className='border-black border-8 mt-8'>
          <ImageFilter
          image={selectedImage}
          filter={filter}
          />
        </section>
      }
      <section>
        <section className='mt-8 flex items-start flex-wrap'>
          <button className="border-black border-4 rounded-2xl py-1 px-4 bg-indigo-500/75 hover:opacity-75 m-2" onClick={() => setFilter(undefined)}>Reset</button>
          <button className="border-black border-4 rounded-2xl py-1 px-4 bg-indigo-500/75 hover:opacity-75 m-2" onClick={() => setFilter("duotone")}>Duotone</button>
          <button className="border-black border-4 rounded-2xl py-1 px-4 bg-indigo-500/75 hover:opacity-75 m-2" onClick={() => setFilter("invert")}>Invert</button>
          <button className="border-black border-4 rounded-2xl py-1 px-4 bg-indigo-500/75 hover:opacity-75 m-2" onClick={() => setFilter("grayscale")}>Grayscale</button>
          <button className="border-black border-4 rounded-2xl py-1 px-4 bg-indigo-500/75 hover:opacity-75 m-2" onClick={() => setFilter("sepia")}>Sepia</button>
        </section>
        {filter === "duotone" && <DuoColorDials setRedOne={setRedOne} setGreenOne={setGreenOne} setBlueOne={setBlueOne} setRedTwo={setRedTwo} setGreenTwo={setGreenTwo} setBlueTwo={setBlueTwo}/>}
      </section>

    </section>
  )
}

export default Editor
