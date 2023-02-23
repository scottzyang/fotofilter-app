
function DuoColorDials({setRedOne, setGreenOne, setBlueOne, setRedTwo, setGreenTwo, setBlueTwo}) {
  return (
    <div>
      <section className='color-one'>
        <h3>Dark Tone Adjustment</h3>
        <div>
          <label htmlFor="one-red-adjust">Red</label>
          <input onChange={(e) => setRedOne(e.target.value)} id="one-red-adjust" name="one-red-adjust" type="range" min="0" max="255"/>
        </div>
        <div>
          <label htmlForr="one-green-adjust">Green</label>
          <input onChange={(e) => setGreenOne(e.target.value)} id="one-green-adjust" name="one-green-adjust" type="range" min="0" max="255"/>
        </div>
        <div>
          <label htmlFor="one-blue-adjust">Blue</label>
          <input onChange={(e) => setBlueOne(e.target.value)} id="one-blue-adjust" name="one-blue-adjust" type="range" min="0" max="255"/>
        </div>
      </section>
      <section className='color-two'>
        <h3>Light Tone Adjustment</h3>
        <div>
          <label htmlFor="two-red-adjust">Red</label>
          <input onChange={(e) => setRedTwo(e.target.value)} id="two-red-adjust" name="two-red-adjust" type="range" min="0" max="255"/>
        </div>
        <div>
          <label htmlFor="two-green-adjust">Green</label>
          <input onChange={(e) => setGreenTwo(e.target.value)} id="two-green-adjust" name="two-green-adjust" type="range" min="0" max="255"/>
        </div>
        <div>
          <label htmlFor="two-blue-adjust">Blue</label>
          <input onChange={(e) => setBlueTwo(e.target.value)} id="two-blue-adjust" name="two-blue-adjust" type="range" min="0" max="255"/>
        </div>
      </section>
    </div>
  )
}

export default DuoColorDials
