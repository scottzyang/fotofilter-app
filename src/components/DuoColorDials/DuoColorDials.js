
function DuoColorDials({setRedOne, setGreenOne, setBlueOne, setRedTwo, setGreenTwo, setBlueTwo}) {
  return (
    <section className="flex flex-col m-4 border-black border-solid border-8 bg-indigo-300 h-auto">
      <section className='color-one m-4 flex flex-col items-start'>
        <h3 className="text-lg font-mono font-bold">Dark Tone</h3>
        <section>
          <label htmlFor="one-red-adjust" className="text-red-600 font-bold">Red</label>
          <input className="ml-7" onChange={(e) => setRedOne(e.target.value)} id="one-red-adjust" name="one-red-adjust" type="range" min="0" max="255"/>
        </section>
        <section>
          <label htmlFor="one-green-adjust" className="text-green-700 font-bold">Green</label>
          <input className="ml-3" onChange={(e) => setGreenOne(e.target.value)} id="one-green-adjust" name="one-green-adjust" type="range" min="0" max="255"/>
        </section>
        <section>
          <label htmlFor="one-blue-adjust" className="text-blue-600 font-bold">Blue</label>
          <input  className="ml-6" onChange={(e) => setBlueOne(e.target.value)} id="one-blue-adjust" name="one-blue-adjust" type="range" min="0" max="255"/>
        </section>
      </section>
      <section className='color-two m-4 flex flex-col items-start'>
        <h3 className="text-lg font-mono font-bold">Light Tone</h3>
        <section>
          <label htmlFor="two-red-adjust" className="text-red-600 font-bold">Red</label>
          <input  className="ml-7" onChange={(e) => setRedTwo(e.target.value)} id="two-red-adjust" name="two-red-adjust" type="range" min="0" max="255"/>
        </section>
        <section>
          <label htmlFor="two-green-adjust" className="text-green-700 font-bold">Green</label>
          <input className="ml-3" onChange={(e) => setGreenTwo(e.target.value)} id="two-green-adjust" name="two-green-adjust" type="range" min="0" max="255"/>
        </section>
        <section>
          <label htmlFor="two-blue-adjust" className="text-blue-600 font-bold">Blue</label>
          <input className="ml-6" onChange={(e) => setBlueTwo(e.target.value)} id="two-blue-adjust" name="two-blue-adjust" type="range" min="0" max="255"/>
        </section>
      </section>
    </section>
  )
}

export default DuoColorDials
