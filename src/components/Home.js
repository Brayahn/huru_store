import React from "react";
import Backg from "./back.jpg";
import "./Home.css";
import Product from "./Product";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <div className="home__container">
          <img className="home_image" src={Backg} alt="Huru Store" />
          {/*  https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/717OO5QwJnL._SX3000_.jpg */}

          <div className="home_row">
            <Product
              title={"Iphone 13 Mini"}
              price={90000}
              image="https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-13-mini-red-back.png?v=5"
              rating={5}
            />

            <Product
              title={"HP Envy"}
              price={65000}
              image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71NBIhOKaSL._AC_SL1463_.jpg"
              rating={5}
            />

            <Product
              title={"Airpods Pro (Renewed)"}
              price={24000}
              image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71lj9Fdeq0L._AC_SL1500_.jpg"
              rating={5}
            />

            <Product
              title={"Arsenal Jersey(2022/2023)"}
              price={10000}
              image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61O5cIvPheL._AC_UX679_.jpg"
              rating={5}
            />
          </div>

          <div className="home_row">
            <Product
              title={"Arsenal Jersey(2022/2023)"}
              price={10000}
              image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61O5cIvPheL._AC_UX679_.jpg"
              rating={5}
            />
          </div>

          <div className="home_row">
            <Product
              title={"HP Envy"}
              price={65000}
              image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71NBIhOKaSL._AC_SL1463_.jpg"
              rating={5}
            />

            <Product
              title={"JBL Boomox 2"}
              price={65000}
              image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71zzQ6KvA7L._AC_SL1200_.jpg"
              rating={3}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
