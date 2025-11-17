import React from "react";
import Images from "../../../constants/images";

function InstaSection() {
  return (
    <div className="flex flex-col mt-5 px-4 container mx-auto">
      <div className="text-center px-4 pt-5 mb-10">
        <p className="tracking-wider section-header-text">Shop Instagram</p>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex space-x-5 justify-between mb-5">
        {[Images.instaPhoto1, Images.instaPhoto2, Images.instaPhoto3].map(
          function (photo, index) {
            return (
              <img
                key={`instaPhoto-${index + 1}`}
                className="h-[101px] w-[101px] rounded-lg"
                src={photo}
                alt={`Instagram image ${index + 1}`}
              />
            );
          }
        )}
      </div>

      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-5 gap-5 mb-10">
        {[
          Images.instaPhoto1,
          Images.instaPhoto2,
          Images.instaPhoto3,
          Images.instaPhoto4,
          Images.instaPhoto5,
        ].map(function (photo, index) {
          return (
            <img
              key={`instaPhoto-${index + 1}`}
              className="w-full hover:grayscale rounded-lg"
              src={photo}
              alt={`Instagram image ${index + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default InstaSection;
