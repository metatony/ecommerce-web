import React from "react";
import SectionTwo from "./sections/SectionTwo";
import SectionThree from "./sections/SectionThree";
import SectionFour from "./sections/SectionFour";
import SectionOne from "./sections/SectionOne";
import SEO from "../../components/SEO";

function Stores() {
  return (
    <main className="px-4 container mx-auto" aria-label="Stores Page">
      <SEO
        title="Cein Stores | Store Locations & Experiences"
        description="Explore Cein Stores' locations, discover unique in-store experiences, and find your nearest boutique for luxury shopping."
        name="ceinstores"
        type="website"
      />

      <SectionOne />
      <SectionTwo />
      {/* Grid Section */}
      <SectionThree />
      <SectionFour />
    </main>
  );
}

export default Stores;
