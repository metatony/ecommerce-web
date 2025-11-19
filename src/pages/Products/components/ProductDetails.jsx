import React from "react";
import { Link, Links, useParams } from "react-router-dom";
import productList from "../../../constants/productList.js";
import ProductAccordion from "./ProductAccordion.jsx";
import { useGlobal } from "../../../provider/GlobalProvider.jsx";
import infoList from "../../../constants/infoList.js";

function ProductDetails() {
  const { id } = useParams();
  const product = productList.find((item) => item.id.toString() === id);
  const { addToCart } = useGlobal();

  // function to create random items for the "you might like section"
  const randomItems = [...productList].sort(function () {
    return Math.random() - 0.5;
  });

  return (
    <main className="my-10 px-4 container mx-auto">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Grid: Product Image */}
        <div className="aspect-[15/16] w-full md:aspect-square rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover md:mt-0 "
            src={product.desktopImage}
            alt={product.name}
            loading="lazy"
          />
        </div>

        {/* Right Grid: Product Details */}
        <article className="flex flex-col space-y-5 font-light md:px-4">
          <p className="text-[#5c5c5c] tracking-wider">Shop | Clothing</p>
          <h2 className="section-header-text tracking-wider leading-8">
            {" "}
            {product.name} <br /> £{product.price}
          </h2>
          <p className="md:w-[450px] paragraph-text tracking-wide leading-7">
            {" "}
            {product.description}{" "}
          </p>

          {/* button */}
          <div className="md:w-[300px] mt-5">
            <button
              onClick={() => addToCart(product)}
              className="w-full bg-black text-white p-3 text-center rounded-lg paragraph-text tracking-wider leading-7"
            >
              Add to Bag
            </button>
          </div>

          <ProductAccordion />
        </article>
      </section>

      {/* bottom div */}

      <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 md:mt-20 justify-items-center ">
        {infoList.map(function (item) {
          return (
            <article
              key={item.id}
              className="font-light space-y-5 mb-5 lg:w-[307px] "
            >
              <h3 className="text-[#5c5c5c] tracking-wider leading-8 ">
                {item.header.toUpperCase()}
              </h3>
              <p className="font-normal section-header-text tracking-wider leading-8  ">
                {item.subheader}
              </p>
              <p className="paragraph-text tracking-wide leading-7 ">
                {item.body}
              </p>
            </article>
          );
        })}
      </section>

      <section className="mt-10 md:mt-20">
        <p className="md:text-center paragraph-text tracking-wide leading-7 ">
          You Might Also Like
        </p>

        <div className="grid h-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10 lg:my-20 container mx-auto ">
          {randomItems.slice(0, 4).map((item) => (
            <div key={item.id} className="cursor-pointer">
              <Link to={`/product/${item.id}`}>
                <div className="aspect-[4/5] w-full overflow-hidden rounded-lg">
                  <img
                    className="w-full h-full object-cover"
                    src={item.desktopImage}
                    alt={item.name}
                    loading="lazy"
                  />
                </div>
              </Link>
              <div className="paragraph-text tracking-wide leading-7 mt-2 ">
                <p>{item.name}</p>
                <p>£{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;
