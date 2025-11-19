import React from "react";
import { useGlobal } from "../../provider/GlobalProvider";
import { IoCloseOutline } from "react-icons/io5";
import { SlTrash } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

function CartSlider({ isOpen, toggleCart }) {
  const { cart, removeFromCart } = useGlobal();

  const totalPrice = cart
    .reduce(function (total, item) {
      return total + item.price;
    }, 0)
    .toFixed(2);

  const navigate = useNavigate();

  return (
    <div
      className={`fixed top-0 right-0 w-80 lg:max-w-[25%] h-full bg-white shadow-lg transform transition-transform duration-300 z-50  ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="p-4  flex justify-between items-center">
        <h2 className="paragraph-text tracking-wider">Shopping Bag</h2>
        <IoCloseOutline
          onClick={toggleCart}
          className="h-5 w-5 ml-3 cursor-pointer"
        />
      </div>
      {/* Cart Content */}
      <div className=" overflow-y-auto h-full">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id}>
              <div className="px-4 py-5 flex justify-between items-start mb-4">
                <img
                  src={item.desktopImage}
                  alt={item.name}
                  className="w-16 h-16 object-cover"
                />
                <div className="w-36 md:w-48 paragraph-text tracking-wide leading-7 ">
                  <p className=" ">{item.name}</p>
                  <p className="">£{item.price}</p>
                </div>

                <SlTrash
                  onClick={() => removeFromCart(item.id)}
                  className="text-[#7e7d7d]"
                />
              </div>
              <hr className="border-[#dfdfdf]" />
            </div>
          ))
        ) : (
          <p className="flex justify-center items-center h-full paragraph-text tracking-wide ">
            Your cart is empty 😯
          </p>
        )}

        {cart.length > 0 && (
          <div className="p-4 font-light my-20 ">
            <p className="mb-5 paragraph-text tracking-wide text-center">
              You have {cart.length} item(s) in your cart
            </p>

            <button
              onClick={() => {
                navigate("/checkout");
                toggleCart();
              }}
              className="w-full bg-black text-white p-3 text-center rounded-lg paragraph-text tracking-wide leading-7"
            >
              Check Out £{totalPrice}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartSlider;
