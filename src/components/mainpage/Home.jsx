import React from 'react'
import Categories from './Categories'
import SliderComponts from './SliderComponts'

function Home() {
  return (
    <>
    <div className="container">
        <div className="row py-5">
            <div className="col-4">
                <Categories/>
            </div>
            <div className="col-8">
                <SliderComponts/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home