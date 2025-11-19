import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { PiKeyReturn } from "react-icons/pi";
import { CiCreditCard1 } from "react-icons/ci";
import { PiCoatHanger } from "react-icons/pi";
import { CiUser } from "react-icons/ci";

function FaqCategories() {
  const faqCategoriesList = [
    {
      id: 1,
      icon: <TbTruckDelivery />,
      text: "Delivery and order tracking",
    },
    {
      id: 2,
      icon: <PiKeyReturn />,
      text: "Returns, exchanges and refunds",
    },
    {
      id: 3,
      icon: <CiCreditCard1 />,
      text: "Payments and promotions",
    },
    {
      id: 4,
      icon: <PiCoatHanger />,
      text: "Information on sizes and products",
    },
    {
      id: 5,
      icon: <CiUser />,
      text: "Personal data and notifications",
    },
  ];

  return (
    <section
      className="col-span-1 space-y-5 w-full order-2 lg:order-1"
      aria-label="FAQ Categories"
    >
      <div className="tracking-wide space-y-5 mt-10 lg:mt-0">
        <h2 className="section-header-text tracking-wider leading-7 font-[400]">Categories</h2>
        {faqCategoriesList.map(function (item) {
          return (
            <div key={item.id} className="text-[#565656]">
              <div className="hover:text-black hover:font-[400] paragraph-text tracking-wider flex items-center space-x-3">
                {item.icon}
                <p> {item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FaqCategories;
