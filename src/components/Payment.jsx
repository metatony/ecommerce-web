import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useGlobal } from "../provider/GlobalProvider";
import { useNavigate } from "react-router-dom";
import CheckoutForm from "../pages/Cart/CheckoutForm";

const apiKey = import.meta.env.VITE_STRIPE_PUBLISHABLE;
// Replace with your actual publishable key
const stripePromise = loadStripe(apiKey);

const EmptyCartCheckout = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto p-4 my-20 text-center paragraph-text tracking-wide leading-7">
      <p className="text-center mb-5">Your cart is empty</p>
      <p className="text-sm text-gray-500 mb-4">
        Add some items to your cart before checkout.
      </p>
      <button
        onClick={() => navigate("/shop")}
        className="mt-4 w-full bg-black text-white p-3 text-center rounded-lg paragraph-text tracking-wider leading-7"
      >
        Continue Shopping
      </button>
    </div>
  );
};

function Payment() {
  const { cart } = useGlobal();
  const totalPrice =
    cart && cart.length > 0
      ? cart.reduce(function (total, item) {
          return total + item.price;
        }, 0)
      : 0;

  // If cart is empty, render component without Stripe Elements
  if (!cart || cart.length === 0) {
    return <EmptyCartCheckout />;
  }

  const options = {
    mode: "payment",
    amount: Math.round(totalPrice * 100),
    currency: "gbp",
    appearance: {
      theme: "stripe",
      variables: {
        colorPrimary: "black",
        colorBackground: "white",
        borderRadius: "2px",
        colorText: "#32325d",
        spacingUnit: "5px",
        fontWeightLight: "300",
      },
      rules: {
        ".Block": {
          backgroundColor: "#f6f8fa",
        },
      },
    },
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
}

export default Payment;
