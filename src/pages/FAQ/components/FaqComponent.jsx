import React from "react";
import Faq from "react-faq-component";

function FaqComponent() {
  const data = {
    title: "Frequently Asked Questions",
    rows: [
      {
        title: "How do I track my order?",
        content:
          "Once your order is confirmed, you’ll receive an email with a tracking number. Use our website's tracking page to view real-time updates on your shipment.",
      },
      {
        title: "Can I change my delivery address?",
        content:
          "Yes, you can change your delivery address before your order is processed. Please contact our support team as soon as possible to make any changes.",
      },
      {
        title: "What is your return policy?",
        content:
          "We accept returns within 30 days of purchase. Items should be unused and in their original packaging. Refunds or exchanges will be processed once the item is received.",
      },
      {
        title: "How do I cancel my order?",
        content:
          "Orders can be canceled if they haven't been processed yet. Contact our customer support immediately to request a cancellation.",
      },
      {
        title: "What should I do if an item is missing from my order?",
        content:
          "If you’re missing an item, first check the packing slip. If the item isn’t listed, please reach out to our support team and we’ll assist you with a replacement or refund.",
      },
    ],
  };

  const styles = {
    titleTextColor: "black",
    titleTextSize: "20px",
    rowTitleColor: "black",
    rowTitleTextSize: "15px",
    rowContentColor: "gray",
    rowContentTextSize: "14px",
    rowContentPaddingTop: "10px",
    rowContentPaddingBottom: "10px",
  };

  const config = {
    // animate: true, tabFocus: true arrowIcon: "",
  };

  return (
    <div className="font-light tracking-wide leading-7">
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
}

export default FaqComponent;
