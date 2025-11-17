import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <header
      className="hero flex flex-col justify-end h-screen bg-cover bg-center pb-16"
      style={{ height: "calc(100vh - 126px)" }}
      aria-label="Hero Section"
    >
      <div className="px-4 container mx-auto z-10">
        {/* hero text */}
        <h1 className="block text-white w-full text-3xl md:text-4xl lg:text-5xl mb-[20px] leading-normal md:leading-16 tracking-wide font-[400]">
          Elevate Your Style <br /> Timeless Fashion,{" "}
          <br className="md:hidden" /> Sustainable <br /> Choices
        </h1>

        <button
          onClick={() => navigate("/shop")}
          className="bg-white text-black paragraph-text w-36 xl:w-52 py-[12px] px-[18px] hover:text-white hover:bg-black rounded-lg"
        >
          Shop Now
        </button>
      </div>
    </header>
  );
}

export default Hero;
