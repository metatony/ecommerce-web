import React from "react";
import FaqComponent from "./FaqComponent";

function FaqAnswers() {
  return (
    <section
      className="flex flex-col col-span-2 w-full order-1 lg:order-2"
      aria-labelledby="faq-main-question"
    >
      {/* FAQ Question and Description */}
      <div className="space-y-5">
        <h2 className="section-header-text font-[400] text-[#292929] tracking-wider">
          Where is my order?
        </h2>
        <p className="paragraph-text tracking-wide leading-8">
          Check the details of your in-store and online purchases, and know
          their status at any moment in My Purchases. If you already have an
          account, log in with your e-mail address and password. If you
          purchased as a guest, enter your e-mail address and the order number
          you wish to consult. In this case, be sure to log in from My
          Purchases. I am not registered.
        </p>
      </div>

      {/* FAQ Component (Answers) */}
      <div className="mt-14">
        <FaqComponent />
      </div>
    </section>
  );
}

export default FaqAnswers;
