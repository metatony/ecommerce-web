import React from "react";
import Images from "../../../constants/images";

function CollectionBanner() {
  return (
    <section>
      <section
        className="mt-16 px-4 container mx-auto"
        aria-labelledby="collection-banner-heading"
      >
        {/* Image Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img
            className="w-full rounded-lg"
            src={Images.collectionBanner1}
            alt="new arrivals"
          />
          <img
            className="w-full rounded-lg"
            src={Images.collectionBanner2}
            alt="the casual edit"
          />
        </div>
      </section>

      <section>
        {/* Text Section */}
        <div className="flex flex-col justify-center items-center text-center mt-5 bg-[#f5f4f4] pt-[60px] px-4">
          <p className="mb-7 tracking-wide leading-8 section-header-text">
            The Art of Fewer, <br className="md:hidden" /> Better Choices
          </p>
          <p className="w-full mb-[150px] md:w-[720px] paragraph-text leading-7 tracking-wide">
            Opting for quality over quantity means selecting timeless, durable,
            and responsibly made items. This approach simplifies our lives and
            fosters a deeper appreciation for our surroundings. Emphasizing
            longevity and responsible production resonates with a more
            sustainable and mindful lifestyle.
          </p>
        </div>
      </section>
    </section>
  );
}

export default CollectionBanner;
