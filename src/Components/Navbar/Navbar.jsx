import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../Assets/Logo.jpeg";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={Logo} alt="" />
        <p> AUM ZONE</p>
      </div>
      <ul className="nav-menu">
        <li>
          <div className="search_box">
            <input
              type="text"
              placeholder="Search"
              value=""
              autoComplete="off"
            />
            <button>Search</button>
          </div>
        </li>
        <li
          onClick={() => {
            setMenu("Home");
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
          {menu === "Home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Products");
          }}
        >
          <Link to="/products" style={{ textDecoration: "none" }}>
            Products
          </Link>{" "}
          {menu === "Products" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("Contact Us")}>
          <Link to="/contact-us" style={{ textDecoration: "none" }}>
            Contact Us
          </Link>{" "}
          {menu === "Contact Us" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <button>Login</button>
        </Link>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};
export default Navbar;
