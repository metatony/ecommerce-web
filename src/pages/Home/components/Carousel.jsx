import React from "react";
import CarouselSlider from "./CarouselSlider";

function Carousel() {
  const OPTIONS = { align: "start", containScroll: true };
  const SLIDE_COUNT = 5;

  return (
    <section
      className="px-4 container mx-auto"
      aria-label="what to wear now section"
    >
      {/* Section Heading */}
      <header className="text-xl font-light py-12 md:py-16 w-full text-left">
        <p className="py-2 tracking-wider section-header-text text-left">
          What to Wear Now
        </p>
      </header>

      {/* Carousel Slider */}
      <CarouselSlider options={OPTIONS} />
    </section>
  );
}

export default Carousel;


