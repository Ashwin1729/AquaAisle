import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import ProductsCard from "../components/ProductsCard";
import Stats from "../components/Stats";
import Categories from "../components/Categories";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products?limit=8");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Hero />
      <div class="flex flex-col text-center w-full">
        <h2 class="text-xs text-cyanHover tracking-widest font-medium title-font mb-1">
          Products
        </h2>
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          Featured Products
        </h1>
      </div>
      {products.length > 0 ? (
        <ProductsCard products={products} />
      ) : (
        <div className="font-semibold text-center my-40">Loading Data ...</div>
      )}
      <Categories />
      <Stats />
    </>
  );
};

export default Home;
