import React from "react";

function SectionOne() {
  return (
    <section
      className="my-20 h-1/2 w-full flex flex-col font-light space-y-5 md:text-center md:justify-center md:items-center"
      aria-labelledby="visit-us-heading"
    >
      <h2 className="section-header-text tracking-wider text-center ">
        Visit Us
      </h2>
      <p className="paragraph-text md:w-1/2 tracking-wide leading-7">
        Embrace the "Less, but better" philosophy in real life at our
        brick-and-mortar stores, where the service and immediate satisfaction of
        a retail space harmonize seamlessly with the intimacy and customization
        of an atelier.
      </p>
    </section>
  );
}

export default SectionOne;
