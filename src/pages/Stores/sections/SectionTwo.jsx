import React from "react";
import Images from "../../../constants/images";

function SectionTwo() {
  return (
    <section className=" my-10" aria-labelledby="stores-section-heading">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Text Section */}
        <article className="space-y-5">
          <h2 className="section-header-text tracking-wider ">
            Stores
          </h2>
          <p className="paragraph-text tracking-wide leading-7">
            Experience the embodiment of our "Less, but better" philosophy at
            our physical stores, providing an intimate setting to explore our
            dedication to timeless designs, heritage craftsmanship, and
            sustainable practices.
          </p>

          <p className="paragraph-text tracking-wide mt-5">
            Enjoy the convenience of in-store pickup, same-day delivery, and
            personalized shopping appointments, available both in-store and
            virtually.
          </p>
        </article>

        {/* Image Section */}
        <div className="mt-5 md:mt-0">
          {/* Desktop view */}
          <img
            className="hidden md:block w-full rounded-lg"
            src={Images.storeImage1}
            alt="store image"
            loading="lazy"
          />
          {/* Mobile view */}
          <img
            className="block md:hidden w-full rounded-lg"
            src={Images.storeImage1Mobile}
            alt="store image"
            loading="lazy"
          />
        </div>
      </section>
    </section>
  );
}

export default SectionTwo;
