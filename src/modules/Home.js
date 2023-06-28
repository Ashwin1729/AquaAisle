import React from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Feature from "../components/Feature";
import Stats from "../components/Stats";
import Footer from "../components/Footer";

const Home = () => {
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
      <Products />
      <Feature />
      <Stats />
      <Footer />
    </>
  );
};

export default Home;
