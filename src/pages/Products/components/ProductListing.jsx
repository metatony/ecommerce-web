import React from "react";
import productList from "../../../constants/productList";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

function ProductListing() {
  return (
    <section aria-labelledby="shop-products-heading">
      {/* Container for Sort and Filter Controls */}

      {/* Product Grid */}
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-20">
        {productList.map((item) => (
          <section key={item.id} className="cursor-pointer">
            <Link to={`/product/${item.id}`}>
              <img
                className="w-full h-52 lg:h-96 object-cover rounded-lg"
                src={item.desktopImage}
                alt={item.name}
                loading="lazy"
              />
              {/* h-52 lg:h-96 */}
            </Link>
            <div className="mt-2 paragraph-text tracking-wide leading-7">
              <p>{item.name}</p>
              <p>£{item.price}</p>
            </div>
          </section>
        ))}
      </section>
    </section>
  );
}

export default ProductListing;
