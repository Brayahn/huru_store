import React, { useState } from "react";
import "./Login.css";
import huru from "./huru.png";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <nav>
        <Link to="/">
          <img className="Login_Logo" src={huru} />
        </Link>
      </nav>

      <div className="Login_Container">
        <h1> Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="Login_SignIn_Button">Sign In</button>
        </form>
        <p>
          By signing in you agree to Huru's Conditions of Use and Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
        </p>
        <button className="Login_RegisterButton">Create a Huru Account</button>
      </div>
    </div>
  );
}
