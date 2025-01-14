import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { RiArrowDropDownLine, RiShoppingBagLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { HiOutlineBars4 } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="bg-[#142c30] text-gold-500 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Small Device Layout */}
        <div className="flex items-center w-full md:hidden">
          {/* Left Icon: Shopping Bag */}
         
        <div className="flex ">
        <button className="text-[#fde68a] mt-1   gap-4 hover:text-gray-300">
            <FaRegHeart className="w-5 h-5" />
          </button>

          <button className="text-[#fde68a] hover:text-gray-300 ml-3">
            <RiShoppingBagLine className="w-6 h-6" />
          </button>
        </div>

          {/* Center Logo */}
          <div className="flex-grow flex justify-center">
            <img
              src={logo}
              alt="Logo"
              className="w-16"
            />
          </div>

          {/* Right Icon: Search */}
          <div className="relative">
            {!isSearchOpen && (
              <button
                onClick={toggleSearch}
                className="hover:text-black rounded-full bg-[#ffdd94] p-2 text-black"
              >
                <CiSearch />
              </button>
            )}
            {isSearchOpen && (
              <div className="relative top-full right-0  bg-[#ffdd94] text-black p-1 flex items-center rounded-full shadow-lg">
                <input
                  type="text"
                  className="border-none text-[#142c30] outline-none text-sm bg-transparent flex-1"
                />
                <CiSearch className="text-[#142c30] ml-2" />
              </div>
            )}
          </div>
        </div>

        {/* Larger Device Layout */}
        <div className="hidden md:flex items-center justify-between w-full">
          {/* Left Links */}
          <nav className="flex space-x-6 text-white">
            <a href="/home" className="hover:text-yellow-300">
              HOME
            </a>
            <a href="/about" className="hover:text-yellow-300">
              ABOUT
            </a>
            <a href="/shop" className="hover:text-yellow-300 flex items-center">
              SHOP
              <RiArrowDropDownLine className="h-5 w-5 ml-2" />
            </a>
            <a href="/contact" className="hover:text-yellow-300">
              CONTACT US
            </a>
          </nav>

          {/* Center Logo */}
          <div className="text-2xl font-bold flex items-center justify-center">
            <span className="text-gold-500 tracking-wider">
              <img
                src={logo}
                alt="Logo"
                className="w-auto"
              />
            </span>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <div className="relative ">
            {!isSearchOpen && (
              <button
                onClick={toggleSearch}
                className="hover:text-black rounded-full bg-[#ffdd94] p-2 text-black"
              >
                <CiSearch />
              </button>
            )}
              {isSearchOpen && (
                <div className="relative top-full left-0 mt-2 bg-[#ffdd94] text-black p-2 flex items-center rounded-full shadow-lg">
                  <input
                    type="text"
                    className="border-none text-[#142c30] outline-none text-sm bg-transparent flex-1"
                  />
                  <CiSearch className="text-[#142c30] ml-2" />
                </div>
              )}
            </div>
            <button className="text-white w-6 h-6 hover:text-gray-300">
              <RiShoppingBagLine  className="w-6 h-6"/>
            </button>
            <HiOutlineBars4 className="w-6 h-6 text-white hover:text-gray-300" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#fde68a] focus:outline-none "
          >
            <HiOutlineBars4 className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-[#142c30]">
          <ul className="space-y-2 py-3 px-4">
            <li>
              <a href="/home" className="block text-white hover:text-gray-300">
                HOME
              </a>
            </li>
            <li>
              <a href="/about" className="block text-white hover:text-gray-300">
                ABOUT
              </a>
            </li>
            <li>
              <a href="/shop" className="block text-white hover:text-gray-300">
                SHOP
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block text-white hover:text-gray-300"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
