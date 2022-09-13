import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";

function App() {
  return (
    //BEM
    <div className="app">
      {/*  <Header /> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Checkout />} />
          {/*    <Route path="header" element={<Header />} />  */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
