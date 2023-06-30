import React, { useContext } from "react";
import Feature from "../components/Feature";
import { ProductContext } from "../context/ProductContext";

const Categories = () => {
  const productCtx = useContext(ProductContext);

  if (productCtx?.categories?.length === 0) {
    return (
      <div className="font-semibold text-center my-40">Loading Data ...</div>
    );
  }

  return (
    <>
      <Feature cards={productCtx.categories} />
    </>
  );
};

export default Categories;
