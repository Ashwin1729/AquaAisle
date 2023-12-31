import React from "react";
import Header from "./components/Header";
import Home from "./modules/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Product from "./modules/Product";
import AllProducts from "./modules/AllProducts";
import CategoryProducts from "./modules/CategoryProducts";
import Cart from "./modules/Cart";
import NewPage from "./components/NewPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route exact path="/products" element={<AllProducts />} />
        <Route
          exact
          path="/products/category/:name"
          element={<CategoryProducts />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<NewPage />} />
        <Route path="/contact" element={<NewPage />} />
        <Route
          path="*"
          element={
            <div className="h-screen flex items-center justify-center font-semibold">
              404 | Sorry, No Data Found !
            </div>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
