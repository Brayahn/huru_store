import React from "react";
import "./Checkout.css";
import backg from "./checkout_.jpg";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className="checkout_Ad" src={backg} alt="checkout_ad" />

        <div>
          <h2 className="checkout_title"> Your Shopping Basket</h2>
          {/* Cart Items*/}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
