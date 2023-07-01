import React from "react";
import { Link } from "react-router-dom";

const Feature = ({ cards }) => {
  return (
    <section className="text-gray-600 body-font p-10">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-cyanHover tracking-widest font-medium title-font mb-1">
            CATAGORIES
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Explore Product Categories
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {cards.map((data) => {
            let categoryDescription;
            if (data === "electronics") {
              categoryDescription =
                "Discover a world of cutting-edge technology with our wide range of electronic products.";
            } else if (data === "jewelery") {
              categoryDescription =
                "Elevate your style with our exquisite collection of jewelry.";
            } else if (data === "men's clothing") {
              categoryDescription =
                "Elevate your wardrobe with our stylish and versatile collection of men's fashion.";
            } else if (data === "women's clothing") {
              categoryDescription =
                "Step into a world of feminine elegance and fashion-forward designs with our stunning collection of women's clothing. ";
            }
            return (
              <Link
                to={`/products/category/${data}`}
                className="p-4 md:w-1/3 cursor-pointer"
              >
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-cyanHover text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium capitalize">
                      {data}
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                      {categoryDescription}
                    </p>
                    <a className="mt-3 text-cyanHover inline-flex items-center">
                      Explore ...
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Feature;
