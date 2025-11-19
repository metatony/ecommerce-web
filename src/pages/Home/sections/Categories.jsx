import React from "react";
import Images from "../../../constants/images";

function Categories() {
  return (
    <section className="px-4 container mx-auto">
      {/* Mobile Paragraph */}
      <div className="paragraph-text w-full pt-12 md:py-14 pb-12 tracking-wide leading-7 md:leading-8">
        <p>
          Elevate your lifestyle with a more intelligent, superior wardrobe.{" "}
          <br className="hidden md:block" />
          Our range is crafted sustainably with longevity in mind.
        </p>
      </div>

      {/* Section Images */}
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-4 space-y-5 md:space-y-0 justify-between items-center">
        <div className="aspect-[15/16] w-full rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover md:mt-0 "
            src={Images.newArrivalsMobile}
            alt="new arrivals"
            loading="lazy"
          />
        </div>

        <div className="aspect-[15/16] w-full rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover md:mt-0 "
            src={Images.casualEditMobile}
            alt="the casual edit"
            loading="lazy"
          />
        </div>

        <div className="aspect-[15/16] w-full rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover md:mt-0 "
            src={Images.bestSellersMobile}
            alt="best sellers"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Categories;
