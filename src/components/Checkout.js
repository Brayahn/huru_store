import React from "react";
import backg from "./checkout_.jpg";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className="checkout_Ad" src={backg} alt="checkout_ad" />

        <div>
          <h2 className="checkout_title"> Your Shopping Basket</h2>
        </div>
      </div>
      <div className="checkout_right">Subtotal goes here</div>
    </div>
  );
}

export default Checkout;
