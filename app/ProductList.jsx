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
    <div>
      <CategoryCarousel
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="flex gap-4 p-4 w-[90%] mx-auto">
        <div className="w-3/4">
          {Object.entries(groupedProducts).map(([type, products]) => (
            <div
              key={type}
              ref={(el) => (productSectionsRef.current[type] = el)}
              className="mb-6"
            >
              <h2 className="text-2xl font-bold mb-4">{type}</h2>
              <div className="grid grid-cols-3 gap-4 gap-y-6">
                {products.map((product) => (
                  <Card key={product.id} product={product} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="fixed top-[220px] right-[80px] w-70 h-80 p-8  rounded-lg  bg-gray-50 flex flex-col items-center justify-center">
          <img
            src="images/sad.PNG"
            alt="Empty Cart"
            className="w-24 h-24 opacity-50 mb-6"
          />
          <h2 className="text-xl font-semibold text-gray-700">
            YOUR CART IS EMPTY
          </h2>
          <p className="text-sm text-gray-500 text-center mt-3">
            Go ahead and explore top categories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
