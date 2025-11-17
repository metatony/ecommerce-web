import React from "react";

function AnnounceBar() {
  return (
    <div className="bg-black text-white text-center py-4 text-[14px] font-light">
      <p className="lg:hidden">The Archive Sale is live. Starting at 20% off. Shop now</p>
      <p className="hidden lg:block">Complimentary U.S. No-Rush Shipping on orders of $95 or more. Shop now</p>
    </div>
  );
}

export default AnnounceBar;

// -mx-4 md:-mx-8 lg:-mx-16