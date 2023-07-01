import React, { useContext, useEffect } from "react";
import ProductsCard from "../components/ProductsCard";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const CategoryProducts = () => {
  const { name } = useParams();

  const productCtx = useContext(ProductContext);
  console.log(productCtx.categoryProducts);

  useEffect(() => {
    productCtx.fetchCategoryProducts(name);
  }, [name]);

  return (
    <>
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-cyanHover tracking-widest font-medium title-font mb-1">
          PRODUCTS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 capitalize">
          {name}
        </h1>
      </div>
      {productCtx?.categoryProducts?.length > 0 ? (
        <ProductsCard type="categoryProducts" />
      ) : (
        <div className="h-screen flex items-center justify-center font-semibold">
          Loading Data ...
        </div>
      )}
    </>
  );
};

export default CategoryProducts;
