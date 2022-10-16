import { useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
//import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useStateValue } from "./components/StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //only runs once when the app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("The User is >>>> ", authUser);
      if (authUser) {
        //the user just logged in / the user logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

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
