import React from "react";
import pic1 from "../Assets/pic1.jpeg";
import "./Offers.css";
const Offers = () => {
  return (
    <div className="offers">
      <div className="offer-left">
        <h1>Exclusive</h1>
        <h1>Offers For you</h1>
        <p>Only on best sellers product</p>
        <button> Check Now</button>
      </div>
      <div className="offer-right">
        <img src={pic1} alt="" />
      </div>
    </div>
  );
};
export default Offers;
