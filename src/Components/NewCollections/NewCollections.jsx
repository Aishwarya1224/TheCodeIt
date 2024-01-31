// Products.jsx

import React from "react";
import "./NewCollections.css";
import pic2 from "../Assets/pic2.jpg";
//import { Product1 } from "./images/Product1.jpg";
const productsData = [
  { id: 1, name: "Product 1", price: 20, imageUrl: { pic2 } },
  { id: 2, name: "Product 2", price: 25, imageUrl: "product2.jpg" },
  { id: 3, name: "Product 3", price: 30, imageUrl: "product3.jpg" },
  { id: 4, name: "Product 4", price: 15, imageUrl: "product4.jpg" },
  { id: 5, name: "Product 5", price: 18, imageUrl: "product5.jpg" },
  { id: 6, name: "Product 6", price: 22, imageUrl: "product6.jpg" },
  { id: 7, name: "Product 7", price: 28, imageUrl: "product7.jpg" },
  { id: 8, name: "Product 8", price: 32, imageUrl: "product8.jpg" },
  { id: 9, name: "Product 9", price: 19, imageUrl: "product9.jpg" },
  { id: 10, name: "Product 10", price: 24, imageUrl: "product10.jpg" },
  { id: 11, name: "Product 11", price: 29, imageUrl: "product11.jpg" },
  { id: 12, name: "Product 12", price: 35, imageUrl: "product12.jpg" },
];

const NewCollections = () => {
  return (
    <div className="products-container">
      <h2>New Collections</h2>
      <div className="cards-container">
        {productsData.map((product) => (
          <div key={product.id} className="product-card">
            <img src={`${product.imageUrl}`} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
