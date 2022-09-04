import React from "react";
import "./Product.css";

const Product = () => {
  return (
    <div className="product">
      <div className="product_info">
        <p>iPhone 13 Mini</p>
        <p className="product_price">
          <small>ksh</small>
          <strong>89000</strong>
        </p>

        <div className="product_rating">
          <p>⭐️</p>
        </div>
      </div>
      <img
        src="https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-13-mini-red-back.png?v=5"
        alt="iphone"
      />
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
