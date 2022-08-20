import Background from '../assets/background/bg.png';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Showcase() {
  return (
    <>
      <Carousel showArrows={false} showThumbs={false} showStatus={false} className="w-full">
        <div className="mx-5 md:mx-0 h-52 flex text-2xl justify-between items-center relative md:basis-2/4 bg-[#051D4C] shadow-xl rounded-xl">
          <div className="text-left uppercase ml-5 text-white font-bold w-20">
            Latest Transparent Glasses
          </div>
          <img
            className="object-contain h-48"
            src={Background}
            alt="hands up with glasses"
          />
          <div className="absolute bottom-0 right-0 hidden sm:flex">
            <button className="text-xl bg-white text-black px-4 py-3 uppercase font-semibold rounded-br-xl">
              Shop Now
            </button>
          </div>
        </div>

        <div className="mx-5 md:mx-0 h-52 flex text-2xl justify-between items-center relative md:basis-2/4 bg-[#051D4C] shadow-xl rounded-xl">
          <div className="text-left uppercase ml-5 text-white font-bold w-20">
            Luxury Acetate Glasses
          </div>
          <img
            className="object-contain h-48"
            src={Background}
            alt="hands up with glasses"
          />
          <div className="absolute bottom-0 right-0 hidden sm:flex">
            <button className="text-xl bg-white text-black px-4 py-3 uppercase font-semibold rounded-br-xl">
              Shop Now
            </button>
          </div>
        </div>

        <div className="mx-5 md:mx-0 h-52 flex text-2xl justify-between items-center relative md:basis-2/4 bg-[#051D4C] shadow-xl rounded-xl">
          <div className="uppercase text-left ml-5 text-white font-bold w-20">
            Exotic Sun Shades
          </div>
          <img
            className="object-contain h-48"
            src={Background}
            alt="hands up with glasses"
          />
          <div className="absolute bottom-0 right-0 hidden sm:flex">
            <button className="text-xl bg-white text-black px-4 py-3 uppercase font-semibold rounded-br-xl">
              Shop Now
            </button>
          </div>
        </div>
      </Carousel>
    </>
  )
}

export default Showcase