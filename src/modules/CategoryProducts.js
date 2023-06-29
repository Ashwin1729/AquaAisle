import React, { useEffect, useState } from "react";
import ProductsCard from "../components/ProductsCard";
import { useParams } from "react-router-dom";

const CategoryProducts = () => {
  const [products, setProducts] = useState([]);

  const { name } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${name}`
      );
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };

    fetchProducts();
  }, [name]);

  return (
    <>
      <div class="flex flex-col text-center w-full mt-20">
        <h2 class="text-xs text-cyanHover tracking-widest font-medium title-font mb-1">
          Products
        </h2>
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 capitalize">
          {name}
        </h1>
      </div>
      {products.length > 0 ? (
        <ProductsCard products={products} />
      ) : (
        <div className="h-screen flex items-center justify-center font-semibold">
          Loading Data ...
        </div>
      )}
    </>
  );
};

export default CategoryProducts;
