import { InsertEmoticon } from "@mui/icons-material";
import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import backg from "./checkout_.jpg";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }, action] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className="checkout_Ad" src={backg} alt="checkout_ad" />

        <div>
          <h2 className="checkout_title"> Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
