import React from "react";
import hoopearning from "../assets/images/hoopearning.jpeg";
import stackablechain from "../assets/images/stackablechains.jpeg";
import wingcubanchain from "../assets/images/wingcubanchain.jpeg";
import { RiShoppingBagLine } from "react-icons/ri";
import { AiFillAlipaySquare } from "react-icons/ai";

const ProductCard = ({ product, isCenterCard }) => {
  return (
    <div
      className={`relative hover:border-4 hover:border-black rounded-2xl group w-[300px] ${
        isCenterCard ? "h-[540px ]" : "h-[460px] mt-3 mb-3"
      } bg-[#fdf6f0] rounded-lg shadow-lg overflow-hidden`}
    >
      {/* Image Section */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
        🤍
      </button>

      {/* Content Section */}
      <div className="absolute bottom-0 left-0 w-full rounded-2xl bg-gradient-to-t from-blue-300/70 to-blue-300/70 text-white p-4 backdrop-blur-md">
        <h3 className="text-lg font-semibold capitalize">{product.name}</h3>
        <div className="flex items-center mt-2">
          <span className="text-yellow-400">⭐</span>
          <span className="ml-1 text-sm">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>
        <p className="mt-2 font-bold">Rs. {product.price}</p>

        {/* Stock Progress */}
        <div className="mt-2">
          <div className="text-sm flex justify-between">
            <span>Sold: {product.sold}</span>
            <span>Available: {product.available}</span>
          </div>
          <div className="w-full bg-gray-300 h-2 rounded-full mt-1">
            <div
              className="h-2 rounded-full bg-green-500"
              style={{
                width: `${
                  (product.sold / (product.sold + product.available)) * 100
                }%`,
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
          🤍
        </button>
        <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
          <AiFillAlipaySquare />
        </button>
        <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
          👁
        </button>

        <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
          <RiShoppingBagLine />
        </button>
      </div>
    </div>
  );
};

const ProductList = () => {
  const products = [
    {
      name: "Hoop earrings",
      image: hoopearning,
      rating: 4.5,
      reviews: 1,
      price: 2000,
      sold: 5,
      available: 10,
    },
    {
      name: "Stackable chains",
      image: stackablechain,
      rating: 5,
      reviews: 3,
      price: 5500,
      sold: 3,
      available: 1,
    },
    {
      name: "Wing Cuban chain",
      image: wingcubanchain,
      rating: 4.8,
      reviews: 2,
      price: 9500,
      sold: 2,
      available: 5,
    },
  ];

  return (
    <div className="flex flex-wrap gap-8 justify-center py-8 bg-[#fef6ec]">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
          isCenterCard={index === 1} // Highlight the center card
        />
      ))}
    </div>
  );
};

export default ProductList;
