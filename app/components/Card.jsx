"use client";

import React from "react";
import { Heart } from "lucide-react";

const Card = ({ product }) => {
  return (
    <div className="relative flex flex-col items-start rounded-lg bg-white p-4 w-full min-h-[340px] h-auto">
      {/* Wishlist Heart Icon */}
      <div className="absolute top-2 right-3 p-1 cursor-pointer">
        <Heart className="w-5 h-5 text-red-600" />
      </div>

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-cover rounded-lg"
      />

      {/* Product Content */}
      <div className="flex flex-col justify-between mt-3 w-full bg-[#f8f8f8] p-3 rounded-lg flex-grow">
        <h2 className="text-lg font-bold">{product.title}</h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">
          {product.description}
        </p>

        {/* Price & Button */}
        <div className="flex items-center justify-between w-full mt-3">
          <p className="text-red-600 font-bold text-xl">Rs. {product.price}</p>
          <span className="text-base bg-[#DE7D5A] text-white px-3 py-1 rounded-lg">
            Starting Price
          </span>
        </div>

        <button className="mt-3 w-full bg-white text-black py-2 rounded-lg hover:bg-[#ff8f37] hover:text-white transition">
          + ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Card;
