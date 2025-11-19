import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {PaymentElement, Elements, useStripe, useElements} from '@stripe/react-stripe-js';
import { useGlobal } from '../../provider/GlobalProvider';


const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    // Check if cart is still not empty before processing
    if (!cart || cart.length === 0) {
      setErrorMessage("Your cart is empty. Please add items before checkout.");
      return;
    }

    // Trigger form validation and wallet collection
    const {error: submitError} = await elements.submit();
    if (submitError) {
      // Show error to your customer
      setErrorMessage(submitError.message);
      return;
    }

    // Create the PaymentIntent and obtain clientSecret from your server endpoint
    const res = await fetch('/create-intent', {
      method: 'POST',
    });

    const {client_secret: clientSecret} = await res.json();

    const {error} = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      clientSecret,
      confirmParams: {
        return_url: 'https://ceinproject.vercel.app/faq',
      },
    });

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setErrorMessage(error.message);
    } else {
      // customers will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  const { cart } = useGlobal();
  const totalPrice = cart.reduce(function(total, item) {
    return total + item.price;
  }, 0);

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 my-20">
      <p className='text-center font-light mb-5'>Payment of £{totalPrice.toFixed(2)}</p>

      <PaymentElement />
      <button type="submit" 
      disabled={!stripe || !elements}
      className="mt-4 w-full bg-black text-white p-3 text-center rounded-lg paragraph-text tracking-wider leading-7"
        >
        Pay
      </button>
      {/* Show error message to your customers */}
      {errorMessage && <div className="mt-2 text-red-500">{errorMessage}</div>}
    </form>
  );
};

export default CheckoutForm;