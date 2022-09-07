import React from "react";
import "./Product.css";

const Product = ({ title, image, price, rating }) => {
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>ksh</small>
          <strong>{price}</strong>
        </p>

        <div className="product_rating">
          <p>{rating}</p>
        </div>
      </div>
      <img src={image} alt="iphone" />
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
