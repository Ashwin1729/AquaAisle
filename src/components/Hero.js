import React from "react";
import { Link } from "react-router-dom";
import hero_img from "../assets/hero_img.png";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font p-10">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Discover Endless Possibilities of
            <br className="hidden lg:inline-block" />
            Online Shopping
          </h1>
          <p className="mb-8 leading-relaxed">
            Welcome to our online store, where you can explore a vast collection
            of fashion, accessories, electronics, home decor, and more. Discover
            an immersive shopping experience that brings convenience, quality,
            and style to your fingertips. From trendy clothing to cutting-edge
            gadgets, we've got you covered. Start your shopping journey today
            and unlock endless possibilities at the click of a button.
          </p>
          <div className="flex justify-center">
            <Link to="/products">
              <button className="inline-flex text-white bg-cyanHover border-0 py-2 px-6 focus:outline-none hover:bg-cyan rounded text-lg">
                Explore Products
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-2xl lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-contain object-center rounded-lg"
            alt="hero"
            src={hero_img}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
