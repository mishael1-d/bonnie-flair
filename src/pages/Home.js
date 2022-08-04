import React from 'react'
import Male1 from '../assets/male-glasses/1.jpg' ;
import Male2 from '../assets/male-glasses/2.jpg' ;
import Male3 from '../assets/male-glasses/3.jpg' ;
import Male4 from '../assets/male-glasses/4.jpg' ;
import Female1 from '../assets/female-glasses/1.jpg' ;
import Female2 from '../assets/female-glasses/2.jpg' ;
import Female3 from '../assets/female-glasses/3.jpg' ;
import Female4 from '../assets/female-glasses/4.jpg' ;
import Antiblue1 from '../assets/anti-blue-light/1.jpg' ;
import Antiblue2 from '../assets/anti-blue-light/2.jpg' ;
import Antiblue3 from '../assets/anti-blue-light/3.jpg' ;
import Antiblue4 from '../assets/anti-blue-light/4.jpg' ;

function Home() {
  return (
    <div>

        <div className="flex justify-between text-justify space-x-8 text-3xl ml-1">
            <div className="basis-1/4 grid pl-20 py-12 shadow-xl rounded-xl">
                <h5 className='font-semibold mb-8'>Categories</h5>
                <p>Male</p>
                <p>Female</p>
                <p>Kids</p>
                <p>unisex</p>
            </div>
            <div className="basis-2/4 bg-[#051D4C] shadow-xl rounded-xl"></div>
            <div className="basis-1/4 grid pl-20 py-12 shadow-xl rounded-xl">
                <p className='font-semibold mb-8'>Categories</p>
                <p>Anti-Bluelight</p>
                <p>Rimless</p>
                <p>Night Vision</p>
                <p>Luxury</p>
            </div>
        </div>
        
        <div className='mt-10 shadow-xl rounded-l-2xl ml-1'>
            <div className='rounded-tl-2xl bg-[#051D4C]'>
                <div className='px-20 flex justify-between py-10 text-white text-3xl'>
                    <div>Anti-blue light glasses</div>
                    <div className='flex justify-between items-center space-x-9'>
                        <p>See All</p>
                        <svg className="w-11 h-11" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </div>
                </div>
            </div>
            <div className='flex justify-between px-14 py-12 space-x-4'>
                <div className='text-left'>
                    <img className='' src={Antiblue1} alt="anti-blue light glasses" />
                    <div className='ml-7'>
                        <p className='text-xl'>Anti-blue light blocking Computer glasses</p>
                        <p className='font-bold'>$14</p>
                    </div>
                </div>
                <div className='text-left'>
                    <img className='' src={Antiblue2} alt="anti-blue light glasses" />
                    <div className='ml-7'>
                        <p className='text-xl'>Anti-blue light blocking Computer glasses</p>
                        <p className='font-bold'>$22</p>
                    </div>
                </div>
                <div className='text-left'>
                    <img className='' src={Antiblue3} alt="anti-blue light glasses" />
                    <div className='ml-7'>
                        <p className='text-xl'>Anti-blue light blocking Computer glasses</p>
                        <p className='font-bold'>$12</p>
                    </div>
                </div>
                <div className='text-left'>
                    <img className='' src={Antiblue2} alt="anti-blue light glasses" />
                    <div className='ml-7'>
                        <p className='text-xl'>Anti-blue light blocking Computer glasses</p>
                        <p className='font-bold'>$18</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-10 shadow-xl rounded-l-2xl ml-1'>
            <div className='rounded-tl-2xl bg-[#051D4C]'>
                <div className='px-20 flex justify-between py-10 text-white text-3xl'>
                    <div>Female Glasses</div>
                    <div className='flex justify-between items-center space-x-9'>
                        <p>See All</p>
                        <svg className="w-11 h-11" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </div>
                </div>
            </div>
            <div className='flex justify-between px-14 py-12 space-x-4'>
                <div className='text-left'>
                    <img className='' src={Female1} alt="anti-blue light glasses" />
                    <div className='ml-7'>
                        <p className='text-xl'>Classic designer sunshade for ladies</p>
                        <p className='font-bold'>$14</p>
                    </div>
                </div>
                <div className='text-left'>
                    <img className='' src={Female2} alt="anti-blue light glasses" />
                    <div className='ml-7'>
                        <p className='text-xl'>Cut trimmed lens with temples sunglasses</p>
                        <p className='font-bold'>$22</p>
                    </div>
                </div>
                <div className='text-left'>
                    <img className='' src={Female3} alt="anti-blue light glasses" />
                    <div className='ml-7'>
                        <p className='text-xl'>Classic designer sunshade for ladies</p>
                        <p className='font-bold'>$12</p>
                    </div>
                </div>
                <div className='text-left'>
                    <img className='' src={Female4} alt="anti-blue light glasses" />
                    <div className='ml-7'>
                        <p className='text-xl'>Cut trimmed lens with temples sunglasses</p>
                        <p className='font-bold'>$18</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-10 shadow-xl rounded-l-2xl ml-1'>
            <div className='bg-[#051D4C] rounded-tl-2xl'>
                <div className='flex justify-between px-20 py-10 text-white text-3xl'>
                    <div>Male Glasses</div>
                    <div className='flex justify-between items-center space-x-9'>
                        <p>See All</p>
                        <svg className="w-11 h-11" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </div>
                </div>
            </div>
            <div className='flex justify-between px-14 py-12 space-x-4'>
                <div className='text-left'>
                    <img className='' src={Male1} alt="anti-blue light glasses" />
                    <div className='ml-7'>
                        <p className='text-xl'>TECH stylish sophisticated sunglasses</p>
                        <p className='font-bold'>$14</p>
                    </div>
                </div>
                <div className='text-left'>
                    <img className='' src={Male2} alt="anti-blue light glasses" />
                    <div className='ml-7'>
                        <p className='text-xl'>Classic men squared polarized sunglasses</p>
                        <p className='font-bold'>$22</p>
                    </div>
                </div>
                <div className='text-left'>
                    <img className='' src={Male3} alt="anti-blue light glasses" />
                    <div className='ml-7 max-w-xs'>
                        <p className='text-xl'>Classic designer sunshades for men</p>
                        <p className='font-bold'>$12</p>
                    </div>
                </div>
                <div className='text-left'>
                    <img className='' src={Male4} alt="anti-blue light glasses" />
                    <div className='ml-7'>
                        <p className='text-xl'>TECH stylish sophisticated sunglasses</p>
                        <p className='font-bold'>$18</p>
                    </div>
                </div>
            </div>
        </div>

        <footer className='mt-10 bg-black text-white pb-44 pt-20 px-28'>
            <div className='flex justify-between'>
                <div className=''>
                    <div className="text-2xl mb-4 font-bold font-['Montserrat']">
                        <p className="font-normal">Bonnie's</p>
                        <p className="tracking-[.5em]">Flair</p>
                    </div>
                    <p className='max-w-sm text-base'>Get all your eye wears at a discounted price and also win gifts while shopping.</p>
                </div>
                <div className=''>
                    <p className='text-3xl font-semibold mb-4'>QUICK LINKS</p>
                    <ul className='text-base'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Categories</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className=''>
                    <button className='text-xl bg-white text-black px-6 py-5 rounded-lg uppercase font-semibold'>Shop Now</button>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Home