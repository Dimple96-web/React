import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  const btnNameHandler = () => {
    btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button className="login-btn" onClick={btnNameHandler}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
