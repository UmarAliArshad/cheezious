"use client";
import React, { useState, useRef, useEffect } from "react";
import Card from "./components/Card";
import CategoryCarousel from "./components/CategoryCarousel";
import productsData from "@/app/data/categories.json";

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    productsData.products[0].type
  );

  const productSectionsRef = useRef({});

  useEffect(() => {
    if (productSectionsRef.current[selectedCategory]) {
      productSectionsRef.current[selectedCategory].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedCategory]);

  const groupedProducts = productsData.products.reduce((acc, product) => {
    if (!acc[product.type]) {
      acc[product.type] = [];
    }
    acc[product.type].push(product);
    return acc;
  }, {});

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
      <CategoryCarousel
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="flex flex-col lg:flex-row gap-6 w-full mx-auto">
        {/* Product Grid */}
        <div className="w-full lg:w-3/4">
          {Object.entries(groupedProducts).map(([type, products]) => (
            <div
              key={type}
              ref={(el) => (productSectionsRef.current[type] = el)}
              className="mb-6"
            >
              <h2 className="text-2xl font-bold mb-4">{type}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-6">
                {products.map((product) => (
                  <Card key={product.id} product={product} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Cart Section== */}
        <div className="lg:fixed lg:top-[220px] lg:right-[40px] xl:right-[80px] w-full lg:w-[300px] h-auto lg:h-[320px] p-6 lg:p-8 rounded-lg bg-gray-50 flex flex-col items-center justify-center shadow-md">
          <img
            src="images/sad.PNG"
            alt="Empty Cart"
            className="w-20 h-20 lg:w-24 lg:h-24 opacity-50 mb-4 lg:mb-6"
          />
          <h2 className="text-lg lg:text-xl font-semibold text-gray-700 text-center">
            YOUR CART IS EMPTY
          </h2>
          <p className="text-sm text-gray-500 text-center mt-2 lg:mt-3">
            Go ahead and explore top categories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
