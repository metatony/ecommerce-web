import React from "react";
import SEO from "../../components/SEO";
import Hero from "./sections/Hero";
import Categories from "./sections/Categories";
import Carousel from "./components/Carousel";
import CollectionBanner from "./sections/CollectionBanner";
import InstaSection from "./sections/InstaSection";

function LandingPage() {
  return (
    <main>
      <SEO
        title="Cein Stores | Luxury Clothing, Accessories & Lifestyle Essentials"
        description="Discover Cein Stores' curated collection of luxurious, high-quality clothing, accessories, and lifestyle essentials. Elevate your style with timeless fashion and impeccable craftsmanship."
        name="ceinstores"
        type="website"
      />

      <Hero />

      <Categories />

      <Carousel />

      <CollectionBanner />

      <InstaSection />
    </main>
  );
}

export default LandingPage;
