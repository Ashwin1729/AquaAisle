import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext({
  cart: [],
  total: 0,
  addToCartHandler: (product, redirect = false) => {},
  handleInc: (id) => {},
  handleDec: (id) => {},
  removeProduct: (id) => {},
});

const CartContextProvider = (props) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const total = cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotal(total);
  }, [cart]);

  const addToCartHandler = (product, redirect = false) => {
    const productExist = cart.find((item) => item.id === product.id);

    if (productExist) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });

      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      const newCart = [...cart, { ...product, quantity: 1 }];

      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }

    if (redirect) {
      navigate("/cart");
    } else {
      alert("Product added to cart successfully!");
    }
  };

  const handleInc = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/cart");
  };

  const handleDec = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/cart");
  };

  const removeProduct = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/cart");
  };

  const store = {
    cart,
    total,
    addToCartHandler,
    handleInc,
    handleDec,
    removeProduct,
  };

  return (
    <CartContext.Provider value={store}>{props.children}</CartContext.Provider>
  );
};

export default CartContextProvider;
