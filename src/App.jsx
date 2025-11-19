import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Faq from "./pages/FAQ/Faq";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/Products/components/ProductDetails";
import { GlobalProvider } from "./provider/GlobalProvider";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About/About";
import Payment from "./components/Payment";
import { Analytics } from "@vercel/analytics/react";
import { HelmetProvider } from "react-helmet-async";
import Stores from "./pages/Stores/Stores";
import CartSlider from "./pages/Cart/CartSlider";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => setIsCartOpen((prev) => !prev);
  const helmetContext = {};

  return (
    <GlobalProvider>
      <HelmetProvider context={helmetContext}>
        <div>
          <BrowserRouter>
            <ScrollToTop />
            <Navbar toggleCart={toggleCart} />
            <CartSlider isOpen={isCartOpen} toggleCart={toggleCart} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/stores" element={<Stores />} />
              <Route path="/shop" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/about" element={<About />} />
              <Route path="/checkout" element={<Payment />} />
            </Routes>
            <Footer />
            <Analytics />
          </BrowserRouter>
        </div>
      </HelmetProvider>
    </GlobalProvider>
  );
}

export default App;
