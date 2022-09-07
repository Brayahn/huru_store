import React from "react";
import Backg from "./back.jpg";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home_image" src={Backg} alt="Huru Store" />
        {/*  https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/717OO5QwJnL._SX3000_.jpg */}
        <div className="home_row">
          <Product
            title={"Iphone 13 Mini"}
            price={30000}
            image="https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-13-mini-red-back.png?v=5"
            rating={5}
          />

          <Product />
          <Product />
          <Product />
        </div>

        <div className="home_row">
          <Product />
        </div>

        <div className="home_row">
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Home;
