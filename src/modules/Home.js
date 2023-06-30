import React, { useContext } from "react";
import Hero from "../components/Hero";
import ProductsCard from "../components/ProductsCard";
import Stats from "../components/Stats";
import Categories from "../components/Categories";
import { ProductContext } from "../context/ProductContext";

const Home = () => {
  const productCtx = useContext(ProductContext);

  return (
    <>
      <Hero />
      <div className="flex flex-col text-center w-full">
        <h2 className="text-xs text-cyanHover tracking-widest font-medium title-font mb-1">
          Products
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          Featured Products
        </h1>
      </div>
      {productCtx?.products?.length > 0 ? (
        <ProductsCard type="homeProducts" />
      ) : (
        <div className="font-semibold text-center my-40">Loading Data ...</div>
      )}
      <Categories />
      <Stats />
    </>
  );
};

export default Home;
