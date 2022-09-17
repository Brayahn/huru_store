import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, image, title, price, rating }) {
  return (
    <div className="checkoutProduct">
      <img className="checkoutProductImage" src={image} />
      <div className="checkoutProductinfo">
        <p className="checkoutProductTitle">{title}</p>
        <p className="checkoutProductPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="checkoutProductPrice">
          {Array(rating)
            .fill()
            .map((_i) => (
              <p>⭐️</p>
            ))}
        </p>
      </div>

      <button>Clear from Cart</button>
    </div>
  );
}

export default CheckoutProduct;
