import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import { Home } from "./Pages/Home";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import ProductDetails from "./Pages/ProductDetails";
import ContactUs from "./Pages/ContantUs";
import Footer from "./Components/Footer/Footer";
import crystal_banner from "./Components/Assets/Crystal_Banner.png";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Products"
            element={
              <ShopCategory banner={crystal_banner} category="products" />
            }
          />
          <Route path="products/:productId" element={<ProductDetails />} />
          <Route path="/Products" element={<Product />} />
          <Route path=":productId" element={<Product />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
