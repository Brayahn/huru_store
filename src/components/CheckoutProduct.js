import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //removes item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

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
        <button onClick={removeFromBasket}>Clear from Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
