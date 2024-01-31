// ProductDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import "./CSS/ProductDetails.css";
const ProductDetail = ({ addToCart }) => {
  const { productId } = useParams();

  // Here you can fetch the product details using the productId
  // For simplicity, we'll use a static list of products
  const productsData = [
    {
      id: 1,
      name: "Product 1",
      price: 20,
      imageUrl: "../Components/Assets/pic2.jpg",
    },
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

  // Find the product with the matching productId
  const product = productsData.find((p) => p.id === parseInt(productId, 10));

  if (!product) {
    return <div>Product not found</div>;
  }
  const handleAddToCart = () => {
    // Add logic to add the product to the cart (e.g., use a state or dispatch an action)
    addToCart(product);
  };
  return (
    <div className="product-detail-container">
      <div className="product-image">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="product-price">${product.price}</p>
        <button onClick={handleAddToCart} className="add-to-cart-btn">
          Add to Cart
        </button>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default ProductDetail;
