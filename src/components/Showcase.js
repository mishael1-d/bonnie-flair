import React from 'react'
import Background from '../assets/background/bg.png';

function Showcase() {
  return (
    <>
      <div className="overflow-hidden mx-5 md:mx-0 w-full h-48 md:h-auto flex grow text-2xl justify-between items-center relative md:basis-2/4 bg-[#051D4C] shadow-xl rounded-xl">
        <div className="uppercase ml-8 text-white font-bold w-20">
          Latest Transparent Glasses
        </div>
        <img
          className="w-60 h-50 absolute left-56 scale-50"
          src={Background}
          alt="hands up with glasses"
        />
        <div className="absolute bottom-0 right-0 hidden sm:flex">
          <button className="text-xl bg-white text-black px-4 py-3 uppercase font-semibold rounded-br-xl">
            Shop Now
          </button>
        </div>
      </div>
    </>
  )
}

export default Showcase