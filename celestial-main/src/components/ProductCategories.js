import React from "react";

const ProductCategories = () => {
  return (
    <div className="bg-[#efe6dc] text-center py-10">
      <h1 className="md:text-6xl text-3xl font-semibold text-[#214344] mb-2">
        Shop By Category
      </h1>
      <p className="text-lg text-[#214344]">
        Browse through your favorite categories. We’ve got them all!
      </p>

      {/* Buttons */}
      <div className="flex justify-center md:gap-60 space-x-2 md:space-x-4 my-6 overflow-hidden max-w-full md:justify-center gap-3 mt-5 mb-8 transition-all duration-300">
        <button
          className="border-4 border-[#214344] rounded-full px-4 py-2 bg-[#214344] text-[#f0d5a0] transition-all duration-300 text-center font-semibold text-sm sm:text-base md:text-lg"
          style={{ width: "100%", maxWidth: "200px", height: "45px" }}
        >
          Women's
        </button>
        <button
          className="border-4 border-[#214344] rounded-full px-4 py-2 text-[#214344] transition-all duration-300 text-center font-semibold text-sm sm:text-base md:text-lg"
          style={{ width: "100%", maxWidth: "200px", height: "45px" }}
        >
          Men's
        </button>
      </div>

      {/* Category Items */}
      <div className="flex justify-center space-x-6 bg-darkGreen py-10 px-4 p-5 bg-[#214344]">
        {Array(5)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="relative w-28 h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 flex items-center justify-center bg-white rounded-full overflow-hidden"
            >
              <div className="w-16 h-8 bg-darkGreen opacity-40 rounded-md"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductCategories;
