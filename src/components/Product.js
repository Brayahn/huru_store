import React from "react";
import "./Product.css";

const Product = ({ id, title, image, price, rating }) => {
  const addToBasket = () => {
    //dispatch data to the data layer
    
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>ksh</small>
          <strong>{price}</strong>
        </p>

        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_i) => (
              <p>⭐️</p>
            ))}
        </div>
      </div>
      <img src={image} alt="image" />
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
};

export default Product;
