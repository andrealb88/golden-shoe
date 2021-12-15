import React, { useState } from "react";
import Homepage from "./pages/homepage/Homepage";
import Slider from "./components/slider/Slider";
import Header from "./components/nav/Nav";
import Products from "./pages/product/Product";
import CheckOut from "./pages/checkout/Checkout";
import HorizontalLinearStepper from "./pages/stepper/Stepper";
import { Routes, Route } from "react-router-dom";
import {
  CartContext,
  CounterContext,
  TotalContext,
  ShippingContext,
} from "./context/AppContext";

function App() {
  let count = useState(0); // Number of items added into cart
  let [cart, setCart] = useState([]); // Array to store the items
  let [total, setTotal] = useState([]);
  let [shippingDetails, setShippingDetails] = useState({});
  console.log("cart", cart);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      <TotalContext.Provider value={[total, setTotal]}>
        <CounterContext.Provider value={count}>
          <ShippingContext.Provider
            value={[shippingDetails, setShippingDetails]}
          >
            <div>
              <Header />
              <Slider />
              <br />
              <br />
              <br />
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/products" element={<Products />} />
                <Route path="/checkout" element={<CheckOut />} />
                <Route path="/payment" element={<HorizontalLinearStepper />} />
              </Routes>
            </div>
          </ShippingContext.Provider>
        </CounterContext.Provider>
      </TotalContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
