import React, { useEffect, useState } from "react";
import Feature from "../components/Feature";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/categories`
      );
      const data = await response.json();
      console.log(data);
      setCategories(data);
    };

    fetchCategories();
  }, []);

  if (categories.length === 0) {
    return (
      <div className="font-semibold text-center my-40">Loading Data ...</div>
    );
  }

  return (
    <>
      <Feature cards={categories} />
    </>
  );
};

export default Categories;
