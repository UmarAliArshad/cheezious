"use client";

import { useRef } from "react";
import categoriesData from "@/app/data/categories.json";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  ...new Set(categoriesData.products.map((product) => product.type)),
];

const CategoryCarousel = ({ selectedCategory, setSelectedCategory }) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -250, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 250, behavior: "smooth" });
  };

  return (
    <div className=" relative w-[90%] mx-auto bg-[#F8F8F8] p-2 flex items-center justify-center mt-24 rounded-lg">
      {/* Left Scroll Button */}
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 border-rose-500 text-rose-500 border-2 rounded-full p-3 bg-[#F8F8F8] z-10 hover:bg-rose-500 hover:text-white"
        onClick={scrollLeft}
      >
        <ChevronLeft size={28} />
      </button>

      {/* Carousel Content */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto gap-4 px-10 py-1 h-20 items-center scrollbar-hide no-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {categories.map((type, index) => (
          <div
            key={index}
            className={`flex-shrink-0 p-4 font-bold text-lg cursor-pointer text-center min-w-[170px] rounded-2xl border-none transition-all ${
              selectedCategory === type
                ? "bg-[#FEDC00] text-black scale-105"
                : "bg-white"
            }`}
            onClick={() => setSelectedCategory(type)}
          >
            {type}
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 border-rose-500 text-rose-500 border-2 rounded-full p-3 bg-[#F8F8F8] z-10 hover:bg-rose-500 hover:text-white"
        onClick={scrollRight}
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
};

export default CategoryCarousel;
