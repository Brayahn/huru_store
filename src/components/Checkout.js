import React from "react";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_Ad"
          src="https://content.goldimageprinting.com/gallery/37/94369fec-d788-488b-b8bc-e97d48f9fafa.jpg"
          alt="checkout_ad"
        />

        <div>
          <h2 className="checkout_title"> Your Shopping Basket</h2>
        </div>
      </div>
      <div className="checkout_right">Subtotal goes here</div>  
    </div>
  );
}

export default Checkout;
