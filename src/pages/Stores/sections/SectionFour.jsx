import React from "react";
import Images from "../../../constants/images";

function SectionFour() {
  return (
    <section className="my-20" aria-labelledby="book-appointment-heading">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Image Section */}
        <div className="mt-5 md:mt-0">
          {/* Desktop View */}
          <img
            className="hidden md:block w-full rounded-lg"
            src={Images.storeImage2}
            alt="Store"
            loading="lazy"
          />
          {/* Mobile View */}
          <img
            className="block md:hidden w-full rounded-lg"
            src={Images.storeImage2Mobile}
            alt="Store"
            loading="lazy"
          />
        </div>

        {/* Text Section */}
        <article className="space-y-5 mt-5 mb-10">
          <p className="section-header-text tracking-wider">
            Book an Appointment
          </p>
          <p className="paragraph-text tracking-wide leading-7">
            Experience personalized shopping services in a welcoming and
            inviting atmosphere, catering to your individual wardrobe and
            seasonal gifting requirements, available both in-store and
            virtually.
          </p>

          <button className="mt-5 p-3 paragraph-text tracking-wider bg-[#f5f5f5] rounded-lg">
            Book Appointment
          </button>
        </article>
      </section>
    </section>
  );
}

export default SectionFour;
