import React from "react";

const products = [
    {
        id: 1,
        name: "Rose-Clover Pendant",
        price: "₹2,600.00",
        sold: 0,
        available: 1,
        image: "https://zoci.in/wp-content/uploads/2024/08/P02047-scaled-980x980.webp", // Replace with actual image path
    },
    {
        id: 2,
        name: "A starry affair",
        price: "₹2,700.00",
        sold: 0,
        available: 1,
        image: "https://zoci.in/wp-content/uploads/2024/08/B03070-scaled-980x980.webp", // Replace with actual image path
    },
    {
        id: 3,
        name: "Rose quartz cocktail ring",
        price: "₹3,800.00",
        sold: 0,
        available: 1,
        image: "https://zoci.in/wp-content/uploads/2024/08/R02416-scaled-980x980.webp", // Replace with actual image path
    },
    {
        id: 4,
        name: "Rose-Clover Pendant",
        price: "₹2,600.00",
        sold: 0,
        available: 5,
        image: "https://zoci.in/wp-content/uploads/2024/08/P02047-scaled-980x980.webp", // Replace with actual image path
    },    {
        id: 1,
        name: "Rose-Clover Pendant",
        price: "₹2,600.00",
        sold: 0,
        available: 6,
        image: "https://zoci.in/wp-content/uploads/2024/08/P02047-scaled-980x980.webp", // Replace with actual image path
    },    {
        id: 7,
        name: "Rose-Clover Pendant",
        price: "₹2,600.00",
        sold: 0,
        available: 1,
        image: "https://zoci.in/wp-content/uploads/2024/08/P02047-scaled-980x980.webp", // Replace with actual image path
    },    {
        id: 8,
        name: "Rose-Clover Pendant",
        price: "₹2,600.00",
        sold: 0,
        available: 1,
        image: "https://zoci.in/wp-content/uploads/2024/08/P02047-scaled-980x980.webp", // Replace with actual image path
    },
    {
        id: 9,
        name: "Rose-Clover Pendant",
        price: "₹2,600.00",
        sold: 0,
        available: 1,
        image: "https://zoci.in/wp-content/uploads/2024/08/P02047-scaled-980x980.webp", // Replace with actual image path
    },
];

const ProductCard = ({ product }) => (
    <div className="bg-[#223D38] text-white shadow-md rounded-lg overflow-hidden border border-gray-300">
        <div className="relative">
            <img
                src={product.image}
                alt={product.name}
                className="h-[300px] w-full object-cover"
            />
            <button className="absolute top-3 right-3 bg-[#F3EDE2] p-2 rounded-full">
                ❤️
            </button>
        </div>
        <div className="p-4">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-base mt-1">{product.price}</p>
            <div className="my-2">
                <div className="flex justify-between text-sm">
                    <span>Sold: {product.sold}</span>
                    <span>Available: {product.available}</span>
                </div>
                <div className="w-full bg-gray-500 h-1 rounded mt-1">
                    <div
                        className="bg-green-400 h-1 rounded"
                        style={{ width: `${(product.sold / product.available) * 100}%` }}
                    ></div>
                </div>
            </div>
            <button className="w-full bg-[#FFFFFF] text-[#223D38] py-2 rounded mt-2">
                Keep in Bag
            </button>
        </div>
    </div>
);

const App = () => (
    <div className="bg-[#EFE7DF] min-h-screen p-8">
        <div className="mb-6">
            <div className="flex flex-wrap items-center gap-4 justify-center mb-4">
                {/* "Fast Filters" Label */}
                <span className="text-[#223D38] font-semibold text-lg">Fast Filters:</span>

                {/* Filter Buttons */}
                <button className="bg-[#223D38] text-white py-2 px-6 rounded-lg">
                    NEW ARRIVAL
                </button>
                <button className="bg-[#223D38] text-white py-2 px-6 rounded-lg">
                    BEST SELLERS
                </button>
                <button className="bg-[#223D38] text-white py-2 px-6 rounded-lg">
                    TRENDING
                </button>
                <button className="bg-[#223D38] text-white py-2 px-6 rounded-lg">
                    MEN'S
                </button>
                <button className="bg-[#223D38] text-white py-2 px-6 rounded-lg">
                    GIFTS
                </button>       
            </div>

            <div className="flex justify-between items-center">
                <p className="text-sm font-medium">Showing 1–20 of 157 results</p>
                <div className="flex items-center gap-2">
                    <label className="text-sm">Default sorting</label>
                    <select className="bg-white border border-gray-300 text-sm rounded-md px-2 py-1">
                        <option>Sort by popularity</option>
                        <option>Sort by latest</option>
                        <option>Sort by price: low to high</option>
                        <option>Sort by price: high to low</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-12">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    </div>
);

export default App;
