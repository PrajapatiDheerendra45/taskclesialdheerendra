import React from "react";
import heroimg from "../assets/images/heroimg.jpg"
import { FaChevronRight } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-md opacity-90"
        style={{
          backgroundImage: `url(${heroimg})`, // Replace with your image URL
        }}
      ></div>

      {/* Content Overlay */}
      <div className="relative flex flex-col items-center justify-center h-full text-center">
  
        <p className="text-white text-lg mb-4">Lorem</p>
        <button className="px-10 py-3 bg-transparent border border-white text-white font-semibold rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition duration-300">
          Learn more
          <span className="material-icons"><FaChevronRight />
          </span> {/* Replace with an actual icon or SVG */}
        </button>
        <h1 className="text-white text-4xl font-bold mb-4">Favorites of 2024</h1>
      </div>
    </div>
  );
};

export default HeroSection;
