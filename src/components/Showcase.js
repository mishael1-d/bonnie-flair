import React from 'react'
import Background from '../assets/background/bg.png';
import { Carousel } from 'flowbite-react';
function Showcase() {
  return (
    <>
      <div className='w-full'>
        <Carousel slideInterval={5000} sliderControls={false}>
          <div className="h-full flex text-2xl justify-between items-center relative basis-2/4 bg-[#051D4C] shadow-xl rounded-xl">
              <div className="uppercase ml-8 text-white font-bold w-20">
                Latest Transparent Glasses
              </div>
              <img
                className="w-60 h-50 absolute left-56 scale-50"
                src={Background}
                alt="hands up with glasses"
              />
              <div className="absolute bottom-0 right-0">
                <button className="text-xl bg-white text-black px-4 py-3 uppercase font-semibold rounded-br-xl">
                  Shop Now
                </button>
              </div>
          </div>
          
          <div className="h-full flex text-2xl justify-between items-center relative basis-2/4 bg-green-900 shadow-xl rounded-xl">
              <div className="uppercase ml-8 text-white font-bold w-20">
                Luxury Acetate Glasses
              </div>
              <img
                className="w-60 h-50 absolute left-56 scale-50"
                src={Background}
                alt="hands up with glasses"
              />
              <div className="absolute bottom-0 right-0">
                <button className="text-xl bg-white text-black px-4 py-3 uppercase font-semibold rounded-br-xl">
                  Shop Now
                </button>
              </div>
          </div>

          <div className="h-full flex text-2xl justify-between items-center relative basis-2/4 bg-indigo-500 shadow-xl rounded-xl">
              <div className="uppercase ml-8 text-white font-bold w-20">
                Affordable Unisex Glasses
              </div>
              <img
                className="w-60 h-50 absolute left-56 scale-50"
                src={Background}
                alt="hands up with glasses"
              />
              <div className="absolute bottom-0 right-0">
                <button className="text-xl bg-white text-black px-4 py-3 uppercase font-semibold rounded-br-xl">
                  Shop Now
                </button>
              </div>
          </div>
        </Carousel>
      </div>
    </>
  )
}

export default Showcase