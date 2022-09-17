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
        <div className="checkout_Product_Rating">
          {Array(rating)
            .fill()
            .map((_i) => (
              <p>⭐️</p>
            ))}
        </div>
        <button>Clear from Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
