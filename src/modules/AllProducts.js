import React, { useContext } from "react";
import ProductsCard from "../components/ProductsCard";
import Categories from "../components/Categories";
import { ProductContext } from "../context/ProductContext";

const AllProducts = () => {
  const productCtx = useContext(ProductContext);

  return (
    <>
      <Categories />
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-cyanHover tracking-widest font-medium title-font mb-1">
          Products
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 capitalize">
          All Products with Featured Ones
        </h1>
      </div>
      {productCtx?.products?.length > 0 ? (
        <ProductsCard type="allProducts" />
      ) : (
        <div className="h-screen flex items-center justify-center font-semibold">
          Loading Data ...
        </div>
      )}
    </>
  );
};

export default AllProducts;
