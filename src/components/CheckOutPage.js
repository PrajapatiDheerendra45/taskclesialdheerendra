import React from "react";

const ProductPage = () => {
    return (
        <div className="container mx-auto p-4">
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left: Image Section */}
                <div>
                    {/* Main Product Image */}
                    <div className="mb-4">
                        <img
                            src="https://via.placeholder.com/500x500.png?text=Main+Image" // Replace with your main product image
                            alt="Main Product"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>

                    {/* Thumbnail Images */}
                    <div className="flex space-x-4">
                        {[
                            "https://via.placeholder.com/100x100.png?text=Thumbnail+1",
                            "https://via.placeholder.com/100x100.png?text=Thumbnail+2",
                            "https://via.placeholder.com/100x100.png?text=Thumbnail+3",
                            "https://via.placeholder.com/100x100.png?text=Thumbnail+4",
                        ].map((src, idx) => (
                            <img
                                key={idx}
                                src={src}
                                alt={`Thumbnail ${idx + 1}`}
                                className="w-16 h-16 rounded-lg border border-gray-300 cursor-pointer hover:border-gray-500"
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
                        {/* Stars */}
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
                    <div className="flex items-center space-x-2">
                        <button className="w-10 h-10 bg-gray-200 rounded hover:bg-gray-300">-</button>
                        <input
                            type="number"
                            value="1"
                            readOnly
                            className="w-12 text-center border rounded"
                        />
                        <button className="w-10 h-10 bg-gray-200 rounded hover:bg-gray-300">+</button>
                    </div>

                    {/* Buy Now Button */}
                    <button className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800">
                        Buy Now
                    </button>

                    {/* Product Description */}
                    <div>
                        <h2 className="text-lg font-bold mb-2">Description</h2>
                        <p className="text-sm text-gray-600">
                            Safer For The Environment: Our denim factory partner recycles 98% of their water
                            using reverse osmosis filtration and keeps byproducts out of the environment by
                            mixing them with concrete to create building materials.
                        </p>
                    </div>

                    {/* Additional Info */}
                    <div>
                        <h2 className="text-lg font-bold mb-2">Details</h2>
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
                    <div>
                        <h2 className="text-lg font-bold mb-2">Delivery & Return</h2>
                        <p className="text-sm text-gray-600">Estimated delivery: Feb 09 - Feb 13</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
