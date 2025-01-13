import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { RiShoppingBagLine } from "react-icons/ri";
import { HiOutlineBars4 } from "react-icons/hi2";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#142c30] text-gold-500 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-8 py-3">
        {/* Left Links */}
        <nav className="hidden md:flex space-x-6 text-white">
          <a href="/home" className="hover:text-yellow-300">
            HOME
          </a>
          <a href="/about" className="hover:text-yellow-300">
            ABOUT{" "}
          </a>

          <a href="/shop" className="hover:text-yellow-300 flex items-center">
            SHOP
      
            <RiArrowDropDownLine className="h-5 w-5 ml-2" />
          </a>
          <a href="/contact" className="hover:text-yellow-300">
            CONTACT US
          </a>
        </nav>

        {/* Logo */}
        <div className="text-2xl font-bold flex items-center justify-center">
          <span className="text-gold-500 tracking-wider">
            <img
              src={logo}
              alt="Logo"
              className="text-gold-500 tracking-wider"
            />
          </span>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-gray-300">
          <CiSearch />

          </button>
          <button className="text-white hover:text-gray-300">
          <RiShoppingBagLine />

          </button>
          <button className="text-white hover:text-gray-300">
          <HiOutlineBars4 />

          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
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
