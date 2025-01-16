import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { LiaShoppingBagSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { TbTag, TbCalculator } from "react-icons/tb"; // Import the icons    

const ProductPage = () => {
    // State to manage the selected image
    const [selectedImage, setSelectedImage] = useState(
        "https://www.thewalletstore.in/cdn/shop/products/Untitled-2_31f2153f-1395-4285-bafc-4b6df6f28f7f.jpg?v=1668753740&width=2048" // Default image
    );

    // List of thumbnail images
    const thumbnails = [
        "https://www.thewalletstore.in/cdn/shop/products/Untitled-2_31f2153f-1395-4285-bafc-4b6df6f28f7f.jpg?v=1668753740&width=2048",
        "https://blingvine.com/cdn/shop/products/enchanted-crystal-bracelet-bracelets-blingvine-690743_750x.jpg?v=1636529925",
        "https://zevrr.com/cdn/shop/products/ZB11.webp?v=1669113135",
        "https://silverlinings.in/cdn/shop/products/SilverBraceletforwomenBG131_1.jpg?v=1601211711",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoUpXXffKupCIF9J9y52eWEKlqW11bSpQgoA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAd8352p0g_RgZPRPlJME560q3vLgNukensQ&s",
    ];

    // State to manage the quantity
    const [quantity, setQuantity] = useState(1);

    // Function to handle increase in quantity
    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    // Function to handle decrease in quantity
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <div className="container mx-auto p-4">
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left: Image Section */}
                <div>
                    {/* Main Product Image with zoom effect */}
                    <div className="mb-4 relative overflow-hidden">
                        <img
                            src={selectedImage} // Display the selected image
                            alt="Main Product"
                            className="w-full h-auto rounded-lg transform transition duration-300 hover:scale-110" // Apply zoom effect on hover
                        />
                    </div>

                    {/* Thumbnail Images */}
                    <div className="flex space-x-4">
                        {thumbnails.map((src, idx) => (
                            <img
                                key={idx}
                                src={src}
                                alt={`Thumbnail ${idx + 1}`}
                                className={`w-16 h-16 rounded-lg border cursor-pointer ${selectedImage === src ? "border-gray-500" : "border-gray-300"
                                    }`}
                                onClick={() => setSelectedImage(src)} // Set the clicked image as selected
                            />
                        ))}
                    </div>
                </div>

                {/* Right: Product Details */}
                <div className="space-y-4">
                    {/* Product Title */}
                    <h1 className="text-3xl font-bold">Faceted Crystal Bracelet</h1>

                    {/* Size */}
                    <p className="text-lg text-gray-500">
                        Size: <span className="font-semibold">17</span>
                    </p>

                    {/* Price Section */}
                    <div className="flex items-center space-x-4">
                        <span className="text-2xl font-bold text-black">₹21.00</span>
                        <span className="text-xl text-gray-400 line-through">₹24.00</span>
                    </div>

                    {/* Stock Information */}
                    <p className="text-gray-500">36 in stock</p>
                    <p className="text-gray-500">Ordered: 13</p>

                    {/* Rating Section */}
                    <div className="flex items-center space-x-2">
                        {[1, 2, 3, 4, 5].map((_, idx) => (
                            <svg
                                key={idx}
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-yellow-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.959a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.959c.3.921-.755 1.688-1.538 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.783.57-1.838-.197-1.538-1.118l1.286-3.959a1 1 0 00-.364-1.118L2.342 9.386c-.783-.57-.381-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.959z" />
                            </svg>
                        ))}
                        <span className="text-gray-600">(2 Reviews)</span>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center space-x-4 mt-4">
                        {/* Quantity Buttons */}
                        <button
                            className="w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300 flex items-center justify-center text-lg font-bold"
                            onClick={decreaseQuantity} // Decrease the quantity
                        >
                            -
                        </button>
                        <input
                            type="number"
                            value={quantity} // Display the current quantity
                            readOnly
                            className="w-12 text-center border rounded"
                        />
                        <button
                            className="w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300 flex items-center justify-center text-lg font-bold"
                            onClick={increaseQuantity} // Increase the quantity
                        >
                            +
                        </button>

                        {/* Buy Now Button */}
                        <button className="flex-grow py-2 px-4 border border-black text-black font-semibold rounded-full hover:bg-gray-100">
                            Buy Now
                        </button>

                        {/* Icons Section */}
                        <div className="flex items-center space-x-4 text-gray-600">
                            {/* Shopping Bag Icon */}
                            <button className="flex flex-col items-center text-gray-600 text-2xl hover:text-black">
                                <LiaShoppingBagSolid />
                            </button>

                            {/* Heart Icon */}
                            <button className="flex flex-col text-2xl items-center text-gray-600 hover:text-black">
                                <CiHeart />
                            </button>

                            {/* Scale Icon */}
                            <button className="flex flex-col items-center text-gray-600 hover:text-black">
                                <i className="fas fa-balance-scale text-xl"></i>
                            </button>
                        </div>
                    </div>

                    {/* Product Description */}
                    <div>
                        <h2 className="text-lg font-bold mb-2 text-white bg-black inline-block px-2">BEST</h2>
                        <p className="text-sm text-gray-600">
                            Safer For The Environment: Our denim factory partner recycles 98% of their water
                            using reverse osmosis filtration and keeps byproducts out of the environment by
                            mixing them with concrete to create building materials.
                        </p>
                    </div>

                    {/* Additional Info */}
                    <div>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>
                                <strong>SKU:</strong> N/A
                            </li>
                            <li>
                                <strong>Categories:</strong> Gold Piercing, Nose Rings, Silver Rings
                            </li>
                            <li>
                                <strong>Tags:</strong> Bestseller, Trend
                            </li>
                            <li>
                                <strong>Brands:</strong> GoldenBrothers, GoldStone
                            </li>
                        </ul>
                    </div>

                    {/* Delivery Info */}
                    <div className="space-y-2">
                        {/* Flexbox to align the icon and text in the same line */}
                        <div className="flex items-center space-x-2">
                            {/* Truck Delivery Icon */}
                            <TbTruckDelivery className="text-2xl" />
                            <p className="text-md mb-2">Delivery & Return</p>
                        </div>

                        {/* Flexbox for SIZE GUIDE */}
                        <div className="flex items-center space-x-2">
                            {/* Size Icon */}
                            <TbTag className="text-2xl" />
                            <p className="text-md mb-2">SIZE GUIDE</p>
                        </div>

                        {/* Flexbox for Estimated Delivery */}
                        <div className="flex items-center space-x-2">
                            {/* Arrow Icon */}
                            <TbCalculator className="text-2xl" />
                            <p className="text-md mb-2">ESTIMATED DELIVERY: FEB 9 - FEB 13</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
