import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Feature from "../components/Feature";
import Stats from "../components/Stats";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
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
        <Products products={products} />
      ) : (
        <div className="font-light text-center">Sorry, No data found!</div>
      )}
      {/* <Products /> */}
      <Feature />
      <Stats />
    </>
  );
};

export default Home;
