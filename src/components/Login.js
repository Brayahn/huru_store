import React from "react";
import "./Login.css";
import huru from "./huru.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <nav>
        <Link to="/">
          <img className="Login_Logo" src={huru} />
        </Link>
      </nav>
    </div>
  );
}
