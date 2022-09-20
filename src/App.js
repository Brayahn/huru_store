import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";

function App() {
  return (
    //BEM
    <div className="app">
      {/*  <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Checkout />} />
          <Route path="login" element={<Login />} />
          {/*    <Route path="header" element={<Header />} />  */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
