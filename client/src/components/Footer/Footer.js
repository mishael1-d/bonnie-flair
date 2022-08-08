import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="mt-10 bg-black text-white py-10 px-20 relative bottom-0 right-0 left-0">
        <div className="flex justify-between">
          <div className="">
            <div className="text-1xl mb-4 font-bold font-['Montserrat']">
              <p className="font-normal">Bonnie's</p>
              <p className="tracking-[.5em]">Flair</p>
            </div>
            <p className="max-w-sm text-base">
              Get all your eye wears at a discounted price and also win gifts
              while shopping.
            </p>
          </div>
          <div className="">
            <p className="text-xl font-semibold mb-4">QUICK LINKS</p>
            <ul className="text-base">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/shop">
              <li>Categories</li>
              </Link>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <button className="text-1xl bg-white text-black px-4 py-3 rounded-lg uppercase font-semibold">
              Shop Now
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
