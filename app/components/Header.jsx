"use client";

import { useState } from "react";
import { Menu, Search, ShoppingCart, User, MapPin } from "lucide-react";
import { HiBars3BottomRight } from "react-icons/hi2";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white text-black px-4 py-4 flex items-center justify-between shadow-md z-50">
      {/* Left - Burger Menu, Logo, and Search */}
      <div className="flex items-center gap-3 w-full md:w-auto">
        {/* Burger Menu */}
        <HiBars3BottomRight className="w-8 h-8 cursor-pointer text-[#F15B25]" />

        {/* Logo */}
        <div className="flex items-center">
          <img src="images/logo.png" alt="Cheezious" className="h-10" />
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-4 py-3 shadow-sm w-full md:w-[400px] lg:w-[550px]">
          <Search size={22} className="text-gray-400" />
          <input
            type="text"
            placeholder="Find in Cheezious"
            className="w-full bg-transparent outline-none px-2 text-gray-600 text-base"
          />
        </div>
      </div>

      {/* Right - Delivery Search, Cart & Login */}
      <div className="flex items-center gap-3 md:gap-4">
        {/* Delivery Search */}
        <div className="hidden md:flex items-center border border-gray-300 rounded-lg px-4 py-3 shadow-sm w-44 md:w-56 lg:w-64">
          <MapPin size={22} className="text-gray-400" />
          <input
            type="text"
            placeholder="Enter Delivery Location"
            className="w-full bg-transparent outline-none px-2 text-gray-600 text-sm md:text-base"
          />
        </div>

        {/* Cart Button */}
        <button className="relative flex items-center gap-1 bg-[#fedc00] text-black px-4 md:px-5 py-2 md:py-3 rounded-lg shadow-md font-bold">
          <ShoppingCart size={22} fill="black" className="text-black" />
          <span className="hidden md:inline">CART</span>
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            0
          </span>
        </button>

        {/* Login Button */}
        <button className="flex items-center gap-1 bg-[#fedc00] text-black px-4 md:px-5 py-2 md:py-3 rounded-lg shadow-md font-bold">
          <User size={22} fill="black" className="text-black" />
          <span className="hidden md:inline">LOGIN</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
