import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext({
  products: [],
  homeProducts: [],
  categories: [],
  categoryProducts: [],
  fetchCategoryProducts: async (category) => {},
});

const ProductContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [homeProducts, setHomeProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };

    const fetchHomeProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products?limit=8");
      const data = await response.json();
      setHomeProducts(data);
    };

    const fetchCategories = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/categories`
      );
      const data = await response.json();
      setCategories(data);
    };

    fetchProducts();
    fetchHomeProducts();
    fetchCategories();
  }, []);

  const fetchCategoryProducts = async (category) => {
    setCategoryProducts([]);
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await response.json();
    console.log(data);
    setCategoryProducts(data);
  };

  const store = {
    products,
    homeProducts,
    categories,
    categoryProducts,
    fetchCategoryProducts,
  };

  return (
    <ProductContext.Provider value={store}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
