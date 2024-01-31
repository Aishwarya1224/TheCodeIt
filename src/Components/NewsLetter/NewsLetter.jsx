import React from "react";
import "./NewsLetter.css";
const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Join Our NewsLetter!</h1>
      <p>Subscribe to our newsletter and stay upadated</p>
      <div>
        <input type="email" placeholder="Your Email ID" />
        <button>Subscribe Now</button>
      </div>
    </div>
  );
};
export default NewsLetter;
