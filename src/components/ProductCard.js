// Import necessary modules
import React from "react";
import hoopearning from "../assets/images/hoopearning.jpeg"
import stackablechain from "../assets/images/stackablechains.jpeg"
import wingcubanchain from "../assets/images/wingcubanchain.jpeg"

const ProductCard = () => {
  return (
    <div className="bg-[#fdf7f2] py-8 px-4">
      {/* Desktop View */}
      <div className="hidden md:flex justify-center gap-8">
        {/* First Card */}
        <div className="relative bg-white rounded-lg p-4 shadow-md">
          <img
            src={hoopearning}
            alt="Hoop earrings"
            className="rounded-lg object-cover h-48 w-full"
          />
          <div className="absolute top-2 right-2 flex flex-col gap-2">
            <button className="bg-[#ffffff] p-2 rounded-full shadow-md">
              <i className="fas fa-heart text-gray-500"></i>
            </button>
            <button className="bg-[#ffffff] p-2 rounded-full shadow-md">
              <i className="fas fa-eye text-gray-500"></i>
            </button>
            <button className="bg-[#ffffff] p-2 rounded-full shadow-md">
              <i className="fas fa-shopping-bag text-gray-500"></i>
            </button>
          </div>
          <div className="text-center mt-4">
            <h3 className="text-lg font-medium">Hoop earrings</h3>
            <p className="text-gray-500">Rs. 2000</p>
            <div className="mt-2 flex items-center justify-center">
              <span className="text-yellow-500 text-sm">★★★★☆</span>
              <span className="text-sm ml-2">1 review</span>
            </div>
            <button className="mt-4 w-full bg-[#ffd700] text-black py-2 px-4 rounded-lg font-medium">
              Add to bag
            </button>
          </div>
        </div>
        {/* third Card */}
        <div className="relative bg-white rounded-lg p-4 shadow-md">
          <img
            src={wingcubanchain}
            alt="Stackable Chains"
            className="rounded-lg object-cover h-48 w-full"
          />
          <div className="absolute top-2 right-2 flex flex-col gap-2">
            <button className="bg-[#ffffff] p-2 rounded-full shadow-md">
              <i className="fas fa-heart text-gray-500"></i>
            </button>
            <button className="bg-[#ffffff] p-2 rounded-full shadow-md">
              <i className="fas fa-eye text-gray-500"></i>
            </button>
            <button className="bg-[#ffffff] p-2 rounded-full shadow-md">
              <i className="fas fa-shopping-bag text-gray-500"></i>
            </button>
          </div>
          <div className="text-center mt-4">
            <h3 className="text-lg font-medium">Stackable Chains</h3>
            <p className="text-gray-500">Rs. 5500</p>
            <div className="mt-2 flex items-center justify-center">
              <span className="text-yellow-500 text-sm">★★★★★</span>
              <span className="text-sm ml-2">3 reviews</span>
            </div>
            <button className="mt-4 w-full bg-[#ffd700] text-black py-2 px-4 rounded-lg font-medium">
              Add to bag
            </button>
          </div>
        </div>
        <div className="relative bg-white rounded-lg p-4 shadow-md">
          <img
            src={stackablechain}
            alt="Stackable Chains"
            className="rounded-lg object-cover h-48 w-full"
          />
          <div className="absolute top-2 right-2 flex flex-col gap-2">
            <button className="bg-[#ffffff] p-2 rounded-full shadow-md">
              <i className="fas fa-heart text-gray-500"></i>
            </button>
            <button className="bg-[#ffffff] p-2 rounded-full shadow-md">
              <i className="fas fa-eye text-gray-500"></i>
            </button>
            <button className="bg-[#ffffff] p-2 rounded-full shadow-md">
              <i className="fas fa-shopping-bag text-gray-500"></i>
            </button>
          </div>
          <div className="text-center mt-4">
            <h3 className="text-lg font-medium">Stackable Chains</h3>
            <p className="text-gray-500">Rs. 5500</p>
            <div className="mt-2 flex items-center justify-center">
              <span className="text-yellow-500 text-sm">★★★★★</span>
              <span className="text-sm ml-2">3 reviews</span>
            </div>
            <button className="mt-4 w-full bg-[#ffd700] text-black py-2 px-4 rounded-lg font-medium">
              Add to bag
            </button>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col md:hidden gap-4">
        {/* Single Card */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img
            src="/path-to-image"
            alt="Hoop earrings"
            className="rounded-lg object-cover h-48 w-full"
          />
          <div className="mt-4 text-center">
            <h3 className="text-lg font-medium">Hoop earrings</h3>
            <p className="text-gray-500">Rs. 2000</p>
            <div className="mt-2 flex items-center justify-center">
              <span className="text-yellow-500 text-sm">★★★★☆</span>
              <span className="text-sm ml-2">1 review</span>
            </div>
            <button className="mt-4 w-full bg-[#ffd700] text-black py-2 px-4 rounded-lg font-medium">
              Add to bag
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <img
            src="/path-to-image"
            alt="Wing Cuban Chain"
            className="rounded-lg object-cover h-48 w-full"
          />
          <div className="mt-4 text-center">
            <h3 className="text-lg font-medium">Wing Cuban Chain</h3>
            <p className="text-gray-500">Rs. 9500</p>
            <div className="mt-2 flex items-center justify-center">
              <span className="text-yellow-500 text-sm">★★★★★</span>
              <span className="text-sm ml-2">2 reviews</span>
            </div>
            <button className="mt-4 w-full bg-[#ffd700] text-black py-2 px-4 rounded-lg font-medium">
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
