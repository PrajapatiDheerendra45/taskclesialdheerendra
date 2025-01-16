import React, { useState } from "react";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.png";
import img7 from "../assets/images/img7.png";

const ProductCategories = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, image: img1, alt: "Product 1" },
    { id: 2, image: img2, alt: "Product 2" },
    { id: 3, image: img3, alt: "Product 3" },
    { id: 4, image: img4, alt: "RINGS" },
    { id: 5, image: img5, alt: "Product 5" },
    { id: 6, image: img6, alt: "Product 6" },
    { id: 7, image: img7, alt: "Product 7" },
  ];

  const handleImageClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="bg-gray-100 py-10 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">Keep images like this</h1>
        <div className="relative w-full">
          {/* Animated Slider */}
          <div className="flex animate-scroll">
            {products.map((product, index) => (
              <div
                key={index}
                className="relative rounded-full overflow-hidden shadow-lg hover:shadow-xl transition mx-2"
                style={{ minWidth: "150px", height: "150px" }}
              >
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => handleImageClick(product)}
                />
                {/* Show name on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 flex items-center justify-center transition">
                  <span className="text-white font-medium text-lg">
                    {product.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Display the name of the selected product */}
        {selectedProduct && (
          <div className="mt-6 text-xl font-bold">
            <h2>You selected: {selectedProduct.alt}</h2>
          </div>
        )}
      </div>

      {/* CSS for Animation */}
      <style>
        {`
        .animate-scroll {
          display: flex;
          animation: scroll 15s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        `}
      </style>
    </div>
  );
};

export default ProductCategories;
